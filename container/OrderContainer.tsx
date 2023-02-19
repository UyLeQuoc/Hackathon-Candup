import { Button, message, Typography } from "antd";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import OrderDetailsComponent from "../components/Order/OrderDetailsComponent";
import OrderDetailsComponent1 from "../components/Order/OrderDetailComponent1";
import OrderItemListComponent from "../components/Order/OrderItemListComponent";
import { ICart, IProduct } from "../interfaces";
import { Dispatch, RootState, store } from "../store";
import { Modal } from "antd";
import ProductList from "../components/Product/ProductList";
import { createOrder, db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { doc, setDoc } from "firebase/firestore";
export interface Product {
  price: number;
  name: string;
  quantity: number;
  image: string;
  id: string;
}

const mapState = (state: RootState) => ({
  user: state.user,
});

const mapDispatch = (dispatch: Dispatch) => ({
  increment: () => dispatch.count.increment(1),
  incrementAsync: () => dispatch.count.incrementAsync(1),
});


const removeItem = (id: string, array: any[]) => {
  const clone = [...array];
  const index = clone.findIndex((p: any) => p.product.id === id);
  if (index !== -1) {
    clone.splice(index, 1);
  }
  return clone
}


let idRemove : string = "";
function OrderContainer(props: any): JSX.Element {
  const [loggedInUser] = useAuthState(auth);

  const deliveryHeading = {
    section: "Thông tin giao hàng",
    sub: ["Room No.", "Thời gian giao hàng"],
  };
  const recipientHeading = {
    section: "Thông tin người nhận",
    sub: ["Tên người nhận", "SĐT người nhận"],
  };
  console.log("PROPS", props.user)


  const [cart, setCart] = useState({
    ProductList: props.user.cart,
    Location: "202",
    DeliveryTime: "9:15-9:30",
    RecipientName: props.user.displayName,
    PhoneNumber: props.user.phoneNumber || "09",
    PaymentMethod: "Cash",
    DeliveryFee: 0,
    Total: 0
  })
  // console.log(cart)

  //update productList when quantity is changed

  const quantityChangeHandler = (id: string, value: number) => {
    const index = cart.ProductList.findIndex((p: any) => p.product.id === id);
    if (value == 0) {
      idRemove = id
      
     showModal()
    } else {
    setCart({
      ...cart,
      ProductList: [
        ...cart.ProductList.slice(0, index),
        { ...cart.ProductList[index], quantity: value },
        ...cart.ProductList.slice(index + 1),
      ]
    });
    }
  };

  //update total when productList is changed
  const {dispatch} = store;

  useEffect(() => {
    let temp = 0;
    cart.ProductList.map((p: any) => {
      temp += p.quantity * p.product.price;
    });
    let shipFee = 2000;
    if (temp > 49000 && temp < 99000) {
      shipFee = 5000}
    else if (temp >= 99000 && temp < 149000) {
      shipFee = 7000
    } else if (temp >= 149000) {
      shipFee = 10000
    }
    setCart({
      ...cart,
      DeliveryFee: shipFee,
      Total: temp*1.05 + shipFee,
    });
  }, [cart.ProductList]);

  const locationChangeHandler = (value: string) => {
    setCart({
      ...cart,
      Location: value
    });
  };
  const deliveryTimeChangeHandler = (value: string) => {
    setCart({
      ...cart,
      DeliveryTime: value
    });
  };
  const recipientNameChangeHandler = (value: string) => {
    setCart({
      ...cart,
      RecipientName: value
    });
  };
  const phoneNumberChangeHandler = (value: string) => {
    setCart({
      ...cart,
      PhoneNumber: value
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    const productList = removeItem(idRemove, cart.ProductList);

    setCart({
      ...cart,
      ProductList: productList
    });
    console.log(productList);
    
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async () => {
    dispatch.user.setUserInfo({phoneNumber: cart.PhoneNumber})
    const phoneNumberRegex = /^(03[2-9]|05[689]|07[06-9]|08[1-9]|09[0-9])+([0-9]{7})$/;

    console.log("CART", cart)
    if(cart.ProductList.length == 0){
      message.error("Cart must not be empty")
      return
    }
    if (cart.Location == ""){
      message.error("Delivery location must be set")
      return
    }
    if (cart.DeliveryTime == ""){
      message.error("Delivery Time must be selected")
      return
    }
    if (cart.RecipientName == ""){
      message.error("Recipient Name must not be empty")
      return
    }
    if (phoneNumberRegex.test(cart.PhoneNumber) == false){
      message.error("Invalid Vietnamese phone number")
      return
    }
    //push data to DB
    

    if(loggedInUser){
      createOrder({
        ...cart,
        total: cart.Total,
        user: loggedInUser.uid,
      });
      dispatch.user.clearProductCart();

      setDoc(
        doc(db, 'users', loggedInUser.uid),{phoneNumber: cart.PhoneNumber},
        {merge: true}
      )
    }
    message.success("Đặt hàng thành công");
  }


  return (
    <div className="flex flex-col bg-slate-400 m-0 p-0">
      <Modal className="z-1" title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>HI</p>
      </Modal>
      <Typography.Title className="text-center">
        THÔNG TIN ĐƠN HÀNG
      </Typography.Title>
      <OrderDetailsComponent1
        headings={deliveryHeading}
        data={[
          { info: cart.Location, handler: locationChangeHandler },
          { info: cart.DeliveryTime, handler: deliveryTimeChangeHandler },
        ]}
      ></OrderDetailsComponent1>
      <OrderDetailsComponent
        headings={recipientHeading}
        data={[
          { info: cart.RecipientName, handler: recipientNameChangeHandler },
          { info: cart.PhoneNumber, handler: phoneNumberChangeHandler },
        ]}
      ></OrderDetailsComponent>
      <OrderItemListComponent
        ProductList={cart.ProductList}
        quantityChangeHandler={quantityChangeHandler}
        total={cart.Total}
        deliveryFee={cart.DeliveryFee}
        paymentMethod={cart.PaymentMethod}
      ></OrderItemListComponent>
      <Button size="large" className="mx-[10vw]" onClick={handleSubmit}>Thanh Toán</Button>
        

    </div>
  );
}

export default connect(mapState, mapDispatch)(OrderContainer);
