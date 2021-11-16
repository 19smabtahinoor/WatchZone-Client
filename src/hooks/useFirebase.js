import axios from 'axios';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import initializedFirebaseApp from '../config/firebase';

//initialize firebase
initializedFirebaseApp();

const useFirebase = () => {
    const [user, setUser] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);
    const auth = getAuth();
    const history = useHistory();
    const location = useLocation();


    React.useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });

        return () => {
            unsubscribed();
        }
    }, [auth])

    //Register Function
    const RegisterUser = (email, password, username, photo) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                updateProfile(auth.currentUser, {
                    displayName: username, 
                    photoURL: photo
                }).then(() => {
                    setUser(res.user);
                    //post to database 
                    axios.post('https://watch-zone.herokuapp.com/users', {
                        name: res.user.displayName,
                        email: res.user.email,
                        photo: res.user.photoURL
                    })
                    swal("Good job!", "Account has been created!", "success");
                    const destination = location?.state?.from || '/';
                    history.replace(destination);
                }).catch((error) => {
                    swal("Something went wrong!", `${error.message}`, "error")
                });
            }).catch((error) => {
                swal("Something went wrong!", `${error.message}`, "error")
            }).finally(() => {
                setIsLoading(false);
            })
    }

    //Login Function
    const LoginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                setUser(res.user);
                swal("Good job!", "logged In!", "success");
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                swal("Something went wrong!", `${error.message}`, "error")
            }).finally(() => {
                setIsLoading(false);
            })
    }

    //Sign out
    const signOutUser = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
            swal("Logout Successful!", "You are logged out!", "success");
            history.push('/login');
        }).catch((err) => {
            swal("Something went wrong!", `${err.message}`, "error")
        }).finally(() => setIsLoading(false));
    }

    return { RegisterUser, LoginUser, signOutUser, user, isLoading }
}

export default useFirebase
