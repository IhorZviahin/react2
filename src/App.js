import {Cars, Forms} from "./components";
import {useState} from "react";

function App() {
    const [newCar, setnewCar] = useState(null);
    const [CarforUpdate, setCarforUpdate] = useState(null);

    return (
        <div>
            <Forms setnewCar={setnewCar} CarforUpdate={CarforUpdate}/>
            <hr/>
            <Cars newCar={newCar} setCarforUpdate={setCarforUpdate}/>
        </div>
    );
}

export default App;
