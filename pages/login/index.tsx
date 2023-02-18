import React from "react";

import GoogleSignInButton from "../../components/button/GoogleSignInButton";
import { Card } from "antd";
import User from "../../components/types/use.type";
import Background from "../public/main/background.jpg";
interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  onGoogleSignInSuccess: (user: User) => void;
  onGoogleSignInFailure: (error: any) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onGoogleSignInSuccess,
  onGoogleSignInFailure,
}) => {
  return (
    <GoogleSignInButton
      onSuccess={onGoogleSignInSuccess}
      onFailure={onGoogleSignInFailure}
    />
  );
};

function LoginPage(): JSX.Element {
  const handleLoginFormSubmit = (email: string, password: string) => {
    // Handle email and password sign-in here
  };

  const handleGoogleSignInSuccess = (user: User) => {
    console.log(user);

    // Handle Google sign-in success here
  };

  const handleGoogleSignInFailure = (error: any) => {
    // Handle Google sign-in failure here
    console.log(error);
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <img
        src={"/main/background.jpg"}
        width={"100%"}
        height={"100%"}
        style={{ position: "absolute" }}
      />
      <Card
        style={{
          width: 400,
          height: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img src="/main/logo.svg" height={100} width={100} />

        <h1>Đăng nhập</h1>
        <LoginForm
          onSubmit={handleLoginFormSubmit}
          onGoogleSignInSuccess={handleGoogleSignInSuccess}
          onGoogleSignInFailure={handleGoogleSignInFailure}
        />
      </Card>
    </div>
  );
}

export default LoginPage;
