import {  useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth";


export const Logout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(logout());
    }, [dispatch])

return (
    <div className="text-center mt-5">
      <h1>Logout Successful</h1>
      <p>You have been logged out successfully.</p>
      <a href="/signin" className="text-primary text-decoration-underline">
        Go to Sign In Page
      </a>
    </div>
  )
}
