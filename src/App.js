import {Navigate, Route, Routes} from "react-router-dom";

import {Header} from "./Header";
import {GetAllMoviePage, MovieDetailsPage, NotFoundPage} from "./pages";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Header/>}>
                <Route index element={<Navigate to={"discover/movie"}/>}/>
                <Route path={'discover/movie'} element={<GetAllMoviePage/>}/>
                <Route path={':id'} element={<MovieDetailsPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
