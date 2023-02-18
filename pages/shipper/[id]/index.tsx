import React, { useEffect, useState } from "react";
import ShipperOrderDetailHeader from "../../../components/Header/ShipperOrderDetail.header";
import ShipperTable from "../../../components/Table/ShipperTable";
import { Button, Skeleton } from "antd";
import { useRouter } from "next/router";
import {
  getOrders,
  getUserFromFirebase,
  setOrderStatus,
} from "../../../utils/firebase";
import { Shipper } from "../../../types/shipper.types";
import { Users } from "../../../types/user.types";
import moment from "moment";
import "moment/locale/vi";
type Props = {};

const orange = "#FF4206";

export default function ShipperOrderDetailPage({}: Props) {
  const newRouter = useRouter();
  const [order, setOrder] = useState<Shipper>();
  const [user, setUser] = useState<Users>();
  const [status, setStatus] = useState(false);
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
      } catch (error) {
        if (error instanceof Error) setError(true);
        console.log(error);

        setLoading(false);
      }
    })();
  }, []);

  const handleChangeStatus = async () => {
    try {
      await setOrderStatus(id, "success");
      setStatus(true);
    } catch (error) {
      setStatus(false);
      console.log(error);
    }
  };

  if (error) {
    newRouter.push("/error-shipper");
    return null;
  }

  return (
    <div>
      <ShipperOrderDetailHeader />
      <div className="container mx-auto px-2">
        <>
          {" "}
          <h1 style={{ color: orange, fontSize: 48 }}>Order Detail</h1>
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
              {" "}
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
                  <h3>Tên người nhận</h3>

                  <h1 style={{ color: orange }}>{user?.displayName}</h1>
                  <h3>Số điện thoại người nhận</h3>
                  <h1 style={{ color: orange }}>{user?.defaultPhoneNumber}</h1>
                </div>
                <div>
                  <h3>Tổng đơn</h3>
                  <h1 style={{ color: orange }}>{order?.totalPrice}</h1>
                  <h3>Thời gian giao hàng</h3>
                  <h1 style={{ color: orange }}>
                    {moment
                      .unix(order?.expired.seconds || 0)
                      .locale("vi")
                      .format("LLLL")}{" "}
                  </h1>
                </div>
              </div>
              {status ? (
                <Button
                  style={{
                    width: "100%",
                    height: 50,
                    margin: "16px 0",
                    background: "green",
                    color: "white",
                  }}
                  onClick={() => newRouter.push("shipper/management")}
                >
                  Đã giao hàng thành công quay lại trang chủ
                </Button>
              ) : (
                <Button
                  style={{
                    width: "100%",
                    height: 50,
                    margin: "16px 0",
                  }}
                  onClick={handleChangeStatus}
                >
                  Xác nhận giao hàng thành công
                </Button>
              )}
            </>
          )}
        </>
      </div>
    </div>
  );
}
