import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { httpsCallable } from 'firebase/functions';

import { AUTH_ERROR_MESSAGES } from '@/constants/auth';

import { sendVerification } from './manageUser';

import { auth, functions } from '@/redux/store';

const signUp = async (email, password, fullName) => {
  try {
    const createUser = httpsCallable(functions, 'signUpUser');

    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // If the displayName field in response.user is empty, update it with the fullName provided.
    // Any errors encountered during the update are handled by throwing the error.
    if (!response.user.displayName) {
      updateProfile(response.user, {
        displayName: fullName,
      }).catch((error) => {
        throw error;
      });
    }

    await createUser({ email, fullName, uid: response.user.uid });
    await sendVerification(response.user);
    // eslint-disable-next-line no-console
    console.log(response.user);
    return response.user;
  } catch (error) {
    throw new Error(AUTH_ERROR_MESSAGES[error?.code]);
  }
};

export { signUp };
