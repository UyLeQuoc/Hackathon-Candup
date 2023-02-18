import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { Dispatch, RootState } from "../store"

const mapState = (state: RootState) => ({
  user: state.user,
});
const mapDispatch = (dispatch: Dispatch) => ({
  increment: () => dispatch.count.increment(1),
  incrementAsync: () => dispatch.count.incrementAsync(1),
});
type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;



function Cart(props:StateProps) : JSX.Element {
  const router = useRouter();
  return (
    <div className='flex justify-center align-middle' onClick={() => router.push("/order")}>
      <Badge count={props.user.cart.length} color="#FF4206" className='cursor-pointer'>
        <ShoppingCartOutlined className='cart-icon'/>
      </Badge>
    </div>
  )
}

const CartIcon = connect(mapState, mapDispatch)(Cart);

export default CartIcon