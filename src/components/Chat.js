import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';

import styled from 'styled-components';

import ChatInput from '../components/ChatInput';
import Message from '../components/Message';

import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import { useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

export default function Chat() {
  const chatBottomRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  );

  const [roomMessages, loading] = useDocument(
    roomId &&
    db.collection('rooms')
      .doc(roomId)
      .collection('messages')
      .orderBy('timestamp', 'asc')
  );

  useEffect (() => {
    chatBottomRef?.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }, [roomId, loading])

 

  

  return (
    <ChatContainer>
    {roomDetails && roomMessages  && (
      <>
      <ChatHeader>
        <HeaderLeft>
          <h4>#{roomDetails?.data().name}</h4>
          <StarBorderOutlinedIcon />
        </HeaderLeft>
        <HeaderRight>
          <InfoOutlinedIcon />
        </HeaderRight>
      </ChatHeader>
      <ChatMessages
      >
        {roomMessages?.docs.map(doc => {
          const { message, timestamp, user, userImage } = doc.data();
          return (
            <Message
              key={doc.id}
              message={message}
              timestamp={timestamp}
              user={user}
              userImage={userImage}
            />
          )
        })}
        <ChatBottom
          ref={chatBottomRef}
        />
      </ChatMessages>
      <ChatInput
        channelId={roomId}
        channelName={roomDetails?.data().name}
        chatBottomRef={chatBottomRef}
      />
      </>

    )}

  
      
    </ChatContainer>
  );
}

const ChatContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2.2rem;
  padding-right: 2.6rem;
  height: var(--chat-header-height);
  border-bottom: .1rem solid var(--chat-header-border-color);
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: flex-end;
  > .MuiSvgIcon-root {
    font-size: 1.8rem;
  }
  > h4 {
    margin-top: 70px;
    font-size: 18px;
    font-weight: bold;
    margin-right: .5rem;
  }
`;

const HeaderRight = styled.div`
  > .MuiSvgIcon-root {
    font-size: 14px;
    color: rgba(29, 28, 29, 0.7);
  }
`;

const ChatMessages = styled.div`
  height: calc(var(--chat-messages-height) - 1rem);
  padding: 1rem 2rem;
  overflow-y: scroll;

`;

const ChatBottom = styled.div`
padding-bottom: 200px;

`;