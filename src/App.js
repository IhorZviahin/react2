import {Posts, Users} from "./components";
import {useState} from "react";

function App() {
    const [postid, setpostid] = useState(null);

    return (
        <div className="App">
            <Users checkid={setpostid}/>
            {postid && <Posts id={postid}/>}
        </div>
    );
}

export default App;
