import CartEmpty from "./components/CartEmpty";
import CartList from "./components/CartList";
import { useCart } from "../../context/CartContext";
import useTitle from "../../hooks/useTitle";

export default function CartPage() {
    const { cartList } = useCart();
    useTitle(`Cart(${cartList.length})`);

    return (
        <main>
            { cartList.length ? <CartList /> : <CartEmpty /> }
        </main>
    )
}