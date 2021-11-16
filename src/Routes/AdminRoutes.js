import { css } from "@emotion/react";
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";
import useAuth from "../hooks/useAuth";
import useCheckAdmin from "../hooks/useCheckAdmin";

const override = css`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin: 0 auto;
  border-color: red;
`;

const AdminRoutes = ({ children, ...rest }) => {
    const {isLoading } = useAuth();
    const {isAdmin} = useCheckAdmin();
    // const [isAdmin, setIsAdmin] = useState(false);
    // let isAdmin  = useRef(false);
    // const { user } = useAuth();
    // const { user } = useAuth();
    // const { user } = useAuth();
    // const { user } = useAuth();
    // const { user } = useAuth();
    // const { user } = useAuth();
    // const { user } = useAuth();
    // const { user } = useAuth();
    // const { user } = useAuth();
    // const { user } = useAuth();
    // const { user } = useAuth();
    // const { user } = useAuth();
    // const { user } = useAuth();
    // console.log({isAdmin})
    // useEffect(() => {
    //     axios.get(`https://watch-zone.herokuapp.com/users?checkAdmin=${user.email}`)
    //         .then(res => {
    //             console.log(res.data.role)
    //             if (res.data.role === "admin") {
    //             setIsAdmin(true)

    //             }
    //         })
    // }, [user.email])
    console.log(isAdmin);

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <HashLoader color="#ef4444" css={override} size={80} />
            </div>
        )
    }


    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAdmin === true ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/dashboard",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}

export default AdminRoutes
