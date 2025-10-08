import { createFileRoute } from '@tanstack/react-router';
import './Checkout.css'

export const Route = createFileRoute('/Checkout')({
  component: Checkout,
})

function Checkout() {
    return (
        <div className="checkoutContainer">
            <p>Here's the stuff in your cart</p>
            <div className="priceTable">
                <div className="header">
                    <div>Item</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Total</div>
                </div>
                <div className="priceRow">
                    <div>3</div>
                    <div>$10.75</div>
                    <div>1</div>
                    <div>$10.75</div>
                </div>
            </div>
            <button>Buy</button>
        </div>
    );
}