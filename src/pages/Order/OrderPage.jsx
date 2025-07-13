import OrderSuccess from "./components/OrderSuccess";
import OrderFail from "./components/OrderFail";
import { useLocation } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

export default function OrderPage() {
    const { state } = useLocation();
    useTitle("Order Summary");

    return(
        <main>
           { state.status ? <OrderSuccess data={state.data} /> : < OrderFail /> }
        </main>
    )
}