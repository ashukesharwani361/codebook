import { Link } from "react-router-dom"
import { useCart } from "../../../context/CartContext"

export default function CartCard({ product }) {

    const { removeFromCart } = useCart();

    return (
        <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
            <div className="flex">
                <Link to="">
                    <img className="w-32 rounded" src={product.poster} alt="product poster" />
                </Link>
                <div className="">
                    <Link to={`product/${product.id}`}>
                        <p className="text-lg ml-2 dark:text-slate-200">{product.name}</p>
                    </Link>
                    <button onClick={() => removeFromCart(product)} className="text-base ml-2 text-red-400">Remove</button>
                </div>
            </div>
            <div className="text-lg m-2 dark:text-slate-200">
                <span>${product.price}</span>
            </div>
        </div>
    )
}