import { MobileNavbar } from "../components/Navbar/MobileComponent/MobileNavbar";

const Cart = () => {
  const cartProduct = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cartProduct);
  return (
    <>
    <MobileNavbar/>
    </>
  )
};

export default Cart;
