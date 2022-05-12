interface UserMessageInterface {
  showUserMessage: boolean;
  isErrorMessage: boolean;
  message: string;
}

interface User {
  email: string;
  password: string;
  token: string;
}


interface Page {
  componentName: string;
  _id: string;
  heading: string;
  bodyText: string;
}



interface VoidFunction {
  (): void;
}
export type {UserMessageInterface, Page, User, VoidFunction}