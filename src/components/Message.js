import styled from 'styled-components';

export default function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user}{' '}
          <span>
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
          <p>{message}</p>
        </h4>
      </MessageInfo>
    </MessageContainer>
  );
}

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  img {
    height: 50px;
    
    border-radius: 8px;
    margin-right: 1rem;
  }
`;

const MessageInfo = styled.div`

  
  > h4 > span {
    font-weight: 400;
    margin-left: 4px;
    font-size: 11px;
    color: gray;
  }
`;