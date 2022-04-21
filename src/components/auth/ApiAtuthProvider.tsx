/*

interface VoidFunction {
  (): void;
}
const ApiAuthProvider = {
  isAuthenticated: false,
  signIn(callback: VoidFunction) {
    ApiAuthProvider.isAuthenticated = true;








	setTimeout(callback, 1000); // fake async
  },
  signOut(callback: VoidFunction) {
    ApiAuthProvider.isAuthenticated = false;
    setTimeout(callback, 1000);
  },
};

export default ApiAuthProvider;
*/
export {}
