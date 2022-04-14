/**
 * This represents some generic auth provider API, like Firebase.
 */

interface VoidFunction {
  (): void;
}
const ApiAuthProvider = {
  isAuthenticated: false,
  signIn(callback: VoidFunction) {
    ApiAuthProvider.isAuthenticated = true;
    setTimeout(callback, 0); // fake async
  },
  signOut(callback: VoidFunction) {
    ApiAuthProvider.isAuthenticated = false;
    setTimeout(callback, 0);
  },
};

export default ApiAuthProvider;
