import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { SuccessNotification, ErrorNotification } from '../../constants/notification';

export const signUp = async (email, password) => {
    const auth = getAuth();
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        return { success: true, message: "Signup Successful. Welcome to Kai, [User Name]!" };
    } catch (error) {
        return { success: false, message: "Signup Failed. Please try again." };
    }
};

const SignUp = () => {
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignUp = async (email, password) => {
        const result = await signUp(email, password);
        if (result.success) {
            setOpenSuccess(true);
        } else {
            setErrorMessage(result.message);
            setOpenError(true);
        }
    };

    return (
        <div>
            {/* Sign-Up form */}
            <button onClick={() => handleSignUp('email@example.com', 'password123')}>Sign Up</button>
            <SuccessNotification
                message="Signup Successful. Welcome to Kai, [User Name]!"
                open={openSuccess}
                onClose={() => setOpenSuccess(false)}
            />
            <ErrorNotification
                message={errorMessage}
                open={openError}
                onClose={() => setOpenError(false)}
            />
        </div>
    );
};

export default SignUp;