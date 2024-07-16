import { useCartStore } from "../store/CartStore"

export const Total = () => {
    const cart = useCartStore(state => state.cart)
    const total = cart.reduce((acc, curr) => acc + curr.price, 0)

    const formatedTotal = new Intl.NumberFormat("pt-AO", {
        style: "currency",
        currency: "AOA",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

    return (
        <>
            <div>Total</div>
            <span>{formatedTotal.format(total)}</span>
        </>
    )

}