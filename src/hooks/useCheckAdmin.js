import axios from "axios";
import React, { useEffect } from 'react';
import useAuth from "./useAuth";

const useCheckAdmin = () => {
    const [isAdmin, setIsAdmin] = React.useState(false);
    const { user } = useAuth();
    // console.log({isAdmin})
    useEffect(() => {
        axios.get(`https://watch-zone.herokuapp.com/users/${user.email}`)
            .then(res => {
                // console.log(res.data.admin)
                if (res.data?.admin) {
                    setIsAdmin(true);
                }
            })
    }, [user.email])
    return {isAdmin}
}

export default useCheckAdmin
