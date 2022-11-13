import { Button } from "@mui/material";
import React from "react";
import { auth } from "../pages/firebase";
import CallIcon from "@mui/icons-material/call";

const SignOut = () => {
  return (
    <div className="header">
      <Button
        style={{ color: "white", fontsize: "15px" }}
        onClick={() => auth.signOut()}
      >
        ログアウトする
      </Button>
      <h3>{auth.currentUser.displayName}</h3>
      <CallIcon />
    </div>
  );
};

export default SignOut;
