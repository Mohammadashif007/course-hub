import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Courses_container from "./components/Courses_container/Courses_container";
import Cart_section from "./components/Cart_section/Cart_section";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1 className="text-4xl font-semibold text-center">Course Registration</h1>
            <div className="grid grid-cols-3 gap-3 py-8">
                <Courses_container></Courses_container>
                <Cart_section></Cart_section>
            </div>
        </div>
    );
}

export default App;
