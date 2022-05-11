interface UserMessage {
  showUserMessage: boolean;
  isErrorMessage: boolean;
  message: string;
}

interface User {
  email: string;
  password: string;
  token: string;
}


interface VoidFunction {
  (): void;
}
export type {UserMessage, User, VoidFunction}