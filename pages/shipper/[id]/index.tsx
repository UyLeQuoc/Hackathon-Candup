import React, { useEffect, useState } from "react";
import ShipperOrderDetailHeader from "../../../components/Header/ShipperOrderDetail.header";
import ShipperTable from "../../../components/Table/ShipperTable";
import { Button, Skeleton, message } from "antd";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import {
  auth,
  getOrders,
  getUserFromFirebase,
  setOrderStatus,
  setOrderStatusWithDeliverer,
} from "../../../utils/firebase";
import { Users } from "../../../types/user.types";
import moment from "moment";
import "moment/locale/vi";
import convertToDongString from "../../../utils/convert";
import { Shipper } from "../../../types/shipper.types";
type Props = {};

const orange = "#FF4206";

export default function ShipperOrderDetailPage({ }: Props) {
  const newRouter = useRouter();
  const [loggedInUser, loadingAuth, errorAuth] = useAuthState(auth);
  const [order, setOrder] = useState<Shipper>();
  const [user, setUser] = useState<Users>();
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id } = newRouter.query;

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        const orders = (await getOrders(id)) as Shipper;
        const user = (await getUserFromFirebase({
          uid: orders?.user,
        })) as Users;
        setLoading(false);
        setUser(user);
        setOrder(orders);
        setStatus(orders?.status);
      } catch (error) {
        if (error instanceof Error) setError(true);

        setLoading(false);
      }
    })();
  }, []);

  const handleChangeStatus = async (status: string) => {
    try {
      await setOrderStatus(id, status);
      if (status === "in transit")
        await setOrderStatusWithDeliverer(id, status, loggedInUser?.uid);
      message.success("In transit");
      setStatus(status);
    } catch (error) {
      if (error instanceof Error) message.error(error.message);
    }
  };

  if (error) {
    newRouter.push("/error-shipper");
    return null;
  }

  return (
    <div>
      <ShipperOrderDetailHeader />
      <div className="container mx-auto px-2" style={{ width: "100vh" }}>
        <h1 style={{ color: orange, fontSize: 48, textAlign: "center" }}>
          Order Detail
        </h1>
        {loading ? (
          <>
            {[1, 2, 3].map((x) => (
              <div key={x} style={{ display: "flex", gap: 20 }}>
                <Skeleton.Image active style={{ height: 120, width: 120 }} />
                <Skeleton active style={{ height: 120 }} />
              </div>
            ))}
          </>
        ) : (
          <>
            {order?.products ? <ShipperTable data={order.products} /> : null}
            <div
              style={{
                marginRight: 16,
                display: "flex",
                justifyContent: "space-between",
                marginTop: 24,
              }}
            >
              <div style={{ padding: "16px" }}>
                <h3>T??n ng?????i nh???n</h3>

                <h1 style={{ color: orange }}>{user?.displayName}</h1>
                <h3>S??? ??i???n tho???i ng?????i nh???n</h3>
                <h1 style={{ color: orange }}>  {order?.phoneNumber}
                </h1>
                <h3>Th???i gian giao h??ng</h3>
                <h1 style={{ color: orange }}>
                  {order?.deliveryTime}
                </h1>
              </div>
              <div>
                <h3>Ph?? giao h??ng</h3>
                <h1 style={{ color: orange }}>
                  {convertToDongString(order ? order.deliveryFee : 0)}
                </h1>
                <h3>T???ng ????n</h3>
                <h1 style={{ color: orange }}>
                  {convertToDongString(
                    order ? order.total : 0
                  )}
                </h1>
                <h3>?????a ??i???m</h3>
                <h1 style={{ color: orange }}>{order?.location}</h1>
              </div>
            </div>
            {status === "delivered" && (
              <Button
                style={{
                  width: "100%",
                  height: 50,
                  margin: "16px 0",
                }}
                onClick={() => newRouter.push("/shipper/management")}
              >
                X??c nh???n ???? giao h??ng th??nh c??ng
              </Button>
            )}
            {status === "pending" && (
              <Button
                style={{
                  width: "100%",
                  height: 50,
                  margin: "16px 0",
                  background: "#FF4206",
                  color: "white",
                }}
                onClick={() => handleChangeStatus("in transit")}
              >
                Nh???n giao h??ng
              </Button>
            )}
            {status === "in transit" && (
              <>
                <Button
                  style={{
                    width: "100%",
                    height: 50,
                    margin: "16px 0",
                    background: "green",
                    color: "white",
                  }}
                  onClick={() => handleChangeStatus("delivered")}
                >
                  ???? giao h??ng th??nh c??ng quay l???i trang ch???
                </Button>
                <Button
                  style={{
                    width: "100%",
                    height: 50,
                    margin: "16px 0",
                    background: "red",
                    color: "white",
                  }}
                  onClick={() => handleChangeStatus("canceled")}
                >
                  H???y ????n h??ng
                </Button>
              </>
            )}
            {status === "canceled" && (
              <Button
                style={{
                  width: "100%",
                  height: 50,
                  margin: "16px 0",
                }}
                disabled
              >
                ????n h??ng ???? h???y
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
