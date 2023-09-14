import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Courses_container from "./components/Courses_container/Courses_container";
import Cart_section from "./components/Cart_section/Cart_section";

function App() {

  const [cart, setCart] = useState([]);
  console.log(cart);
   
  const handleAddToCart = course => {
    const allCourse = [...cart, course];
    setCart(allCourse);
}

    return (
        <div className="App">
            <h1 className="text-4xl font-semibold text-center">Course Registration</h1>
            <div className="grid grid-cols-3 gap-3 py-8">
                <Courses_container handleAddToCart={handleAddToCart}></Courses_container>
                <Cart_section cart_items={cart}></Cart_section>
            </div>
        </div>
    );
}

export default App;
