import { Typography } from "@mui/material";
import { useLocation, Navigate } from "react-router";
import { useAccount } from "../../lib/hooks/useAccount";
import { Outlet } from "@mui/icons-material";

export default function RequiredAuth() {
    const{currentUser, loadingUserInfo} = useAccount();
    const location =useLocation();

    if(loadingUserInfo) return <Typography>Loading...</Typography>

    if(!currentUser) return <Navigate to='/login' state={{from:location}}/>
  return (
    <Outlet/>
  )
}