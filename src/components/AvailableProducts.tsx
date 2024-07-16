import { useCartStore } from "../store/CartStore"

export const AvailableProducts = () => {

    const [availableItems, addToCard] = useCartStore(state => [state.availableItems, state.addToCard])

    return (<div>
        <ul>
            {availableItems.map((item) => (
                <li key={item.id}>
                    <span key={item.id}>
                    {item.name} | {item.price} - 
                    </span>
                    <button onClick={() => addToCard(item)}>Add to Cart</button>
                </li>
            ))}
            <li></li>
        </ul>
    </div>)


}