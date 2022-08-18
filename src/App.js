import {Navigate, Route, Routes} from "react-router-dom";

import {Header} from "./layouts";
import {FilmsByGenrePage, GetAllMoviePage, MovieDetailsPage, NotFoundPage} from "./pages";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Header/>}>
                <Route index element={<Navigate to={"movie"}/>}/>
                <Route path={'movie'} element={<GetAllMoviePage/>}/>
                <Route path={'movie/:genreId'} element={<FilmsByGenrePage/>}/>
                <Route path={'movie/:genreId/:id'} element={<MovieDetailsPage/>}/>
                <Route path={'movie/:id'} element={<MovieDetailsPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
