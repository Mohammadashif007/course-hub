import { useState } from "react";
import "./App.css";
import Courses_container from "./components/Courses_container/Courses_container";
import Cart_section from "./components/Cart_section/Cart_section";

function App() {
    const [cart, setCart] = useState([]);
    const [time, setTime] = useState(0);

    const handleAddToCart = (course, newTime) => {
      const cartItems = [...cart, course];
      setCart(cartItems);
      setTime(time + newTime);
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
                <Cart_section cart_items={cart} time={time}></Cart_section>
            </div>
        </div>
    );
}

export default App;
