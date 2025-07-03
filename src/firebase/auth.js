import { useState, useEffect } from 'react';
import { 
    getAuth, 
    onAuthStateChanged, 
    GoogleAuthProvider, 
    signInWithPopup,
    signOut 
} from 'firebase/auth';
import { auth } from './config';

// Custom hook to track the current user
export const useAuth = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
        return unsubscribe; // Cleanup listener on unmount
    }, []);

    return currentUser;
};

// Google sign-in function
export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider);
};

// Sign out function
export const logout = () => {
    return signOut(auth);
};
