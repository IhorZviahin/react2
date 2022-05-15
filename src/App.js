import {Routes, Route, Navigate} from "react-router-dom"

import {MainLayouts} from "./layouts";
import {CarsPage, NotFoundPage} from "./pages";


function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayouts/>}>
                <Route index element={<Navigate to={'cars'}/>}/>
                <Route path="cars" element={<CarsPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
