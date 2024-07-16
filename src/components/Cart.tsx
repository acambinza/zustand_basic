import { useCartStore } from "../store/CartStore"

export const Cart = () => {

    const [cart, removeFromCard ] = useCartStore(state => [state.cart, state.removeFromCard])

    return (<div>
        <ul>
            {cart.map((item) => (
                <li key={item.id}>
                    <span key={item.id}>
                    {item.name} | {item.description}
                    </span>
                    <button onClick={() => removeFromCard(item.id)}>Remove from Cart</button>
                </li>
            ))}
            <li></li>
        </ul>
    </div>)


}