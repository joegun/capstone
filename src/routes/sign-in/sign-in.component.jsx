import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { 
    auth, 
    signInWithGooglePopup, 
    createUserDocumentFromAuth, 
    signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils'

import SignUpform from '../../components/sign-up/sign-up-form.component';

const SignIn = () => {
    // useEffect(() => {
    //     async function getRedirectResultFunc() {
    //         const response = await getRedirectResult(auth);
    //         if (response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //         //console.log(response);
    //     }
    //     getRedirectResultFunc();
    // }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            {/*<button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button>*/}
            <SignUpform></SignUpform>
        </div>
    );
};

export default SignIn;