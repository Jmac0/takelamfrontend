import React from "react";
import { UserMessageContainer  } from '../styles/Admin.Styles'

interface MessageObject {
  showUserMessage: boolean;
  isErrorMessage: boolean;
  message: string;
}


function UserMessage({isErrorMessage, message, showUserMessage }:MessageObject) {
  return (
    <UserMessageContainer isErrorMessage={isErrorMessage} showUserMessage={showUserMessage}>
      {message}
    </UserMessageContainer>
  );
}

export default UserMessage;