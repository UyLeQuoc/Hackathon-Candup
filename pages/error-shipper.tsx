import { Button } from "antd";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

function ErrorShipper({}: Props) {
  const router = useRouter();
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2>Có gì đó không đúng xin vui vòng thử lại !</h2>
      <Button onClick={() => router.push("/shipper/management")}>
        Trở về trang chủ
      </Button>
    </div>
  );
}

export default ErrorShipper;
