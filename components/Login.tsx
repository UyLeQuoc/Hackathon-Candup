
import { Button, Card, ConfigProvider } from "antd";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase"

function LoginPage(): JSX.Element {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const signIn = () => {
    signInWithGoogle();
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
        <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#FF4206',
                },
              }}
              >
                  <Button
                    type="primary"
                    size="large"
                    onClick={signIn}
                  >
                    Sign In With Google
                  </Button>
              </ConfigProvider>
        
      </Card>
    </div>
  );
}

export default LoginPage;
