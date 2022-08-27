import "./App.css"
import {useState} from "react";
import Modal from "./modal/Modal";

function App() {

    const [modalActive, setModalActive] = useState(true)

    return (
        <div className="App">
            <main>
                <button className="open-btn" onClick={()=> {
                    setModalActive(true)
                }}>Open modale window</button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iste magni porro, sint sunt
                    voluptates.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iste magni porro, sint sunt
                    voluptates.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iste magni porro, sint sunt
                    voluptates.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iste magni porro, sint sunt
                    voluptates.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iste magni porro, sint sunt
                    voluptates.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iste magni porro, sint sunt
                    voluptates.</p>
            </main>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
}

export default App;
