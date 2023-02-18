import React from "react";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import User from "../types/use.type";

interface GoogleSignInButtonProps {
  onSuccess: (user: User) => void;
  onFailure: (error: any) => void;
}

const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({
  onSuccess,
  onFailure,
}) => {
  const handleSuccess = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if ("tokenId" in response) {
      const {
        tokenId,
        profileObj: { name, email, imageUrl },
      } = response;
      onSuccess({
        id: tokenId,
        name,
        email,
        photoUrl: imageUrl,
      });
    }
  };

  const handleFailure = (error: any) => {
    onFailure(error);
  };

  return (
    <GoogleLogin
      clientId="301934753759-u7f7ojc615jsdn4kbid7r8q5n2vvcqf8.apps.googleusercontent.com"
      buttonText="Sign in with Google"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleSignInButton;
