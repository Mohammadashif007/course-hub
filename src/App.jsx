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
   

    const handleAddToCart = (course, time, price) => {
        if (cart.includes(course)) {
            showTost(course);
        } else {
            const updateCredit = creditRemaining - time;
            const addedCredit = totalTime + time;
            if (updateCredit >= 0 && addedCredit <= 20) {
                setCart([...cart, course]);
                setTotalTime(addedCredit);
                setCreditRemaining(updateCredit);
                setTotalPrice(totalPrice + price);
                
            }
            else {
                exceed(addedCredit);
            }
           
        }
    };

    const showTost = () => toast("Item already added.");
    const exceed = () => toast('Credit limit is exceeded!!');

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
                    
                ></Cart_section>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default App;
