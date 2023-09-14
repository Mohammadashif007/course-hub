import { useState } from "react";
import "./App.css";
import Courses_container from "./components/Courses_container/Courses_container";
import Cart_section from "./components/Cart_section/Cart_section";

function App() {
    const [cart, setCart] = useState([]);
    const [totalTime, setTotalTime] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [creditRemaining, setCreditRemaining] = useState(20);

    const handleAddToCart = (course, time, price) => {
        const cartItems = [...cart, course];
        setCart(cartItems);
        setTotalTime(totalTime + time);
        setTotalPrice(totalPrice + price);
        setCreditRemaining(creditRemaining - time);
    };

    return (
        <div className="App">
            <h1 className="text-4xl font-semibold text-center">
                Course Registration
            </h1>
            <div className="grid grid-cols-3 gap-3 py-8">
                <Courses_container
                    handleAddToCart={handleAddToCart}
                ></Courses_container>
                <Cart_section
                    cart_items={cart}
                    time={totalTime}
                    totalPrice={totalPrice}
                    creditRemaining={creditRemaining}
                ></Cart_section>
            </div>
        </div>
    );
}

export default App;
