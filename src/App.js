import {Cars, Forms} from "./components";
import {useState} from "react";

function App() {
    const [newCar, setnewCar] = useState(null);
    return (
        <div>
            <Forms setnewCar={setnewCar}/>
            <hr/>
            <Cars newCar={newCar}/>
        </div>
    );
}

export default App;
