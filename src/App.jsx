import { useState } from "react";
import "./App.css";
import Courses_container from "./components/Courses_container/Courses_container";
import Cart_section from "./components/Cart_section/Cart_section";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [cart, setCart] = useState([]);
    const [totalTime, setTotalTime] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [creditRemaining, setCreditRemaining] = useState(20);
    const [index, setIndex] = useState(0);

    const handleAddToCart = (course, time, price, index) => {
        if (cart.includes(course)) {
            alert('already added');
        } else {
            const updateCredit = creditRemaining - time;
            if(updateCredit >= 0){
                setCart([...cart, course]);
                setTotalTime(totalTime + time);
                setCreditRemaining(updateCredit);
                setTotalPrice(totalPrice + price);
                setIndex(index + 1);
            }

        }
    };

    return (
        <div className="App bg-[#F3F3F3] p-10">
            <h1 className="text-4xl font-semibold text-center">
                Course Registration
            </h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 py-8">
                <Courses_container
                    handleAddToCart={handleAddToCart}
                ></Courses_container>
                <Cart_section
                    cart_items={cart}
                    time={totalTime}
                    totalPrice={totalPrice}
                    creditRemaining={creditRemaining}
                    index={index}
                ></Cart_section>
            </div>
        </div>
    );
}

export default App;
