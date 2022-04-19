import {Routes, Route, Navigate} from "react-router-dom"

import {MainLayout} from "./layouts";
import {AboutePage, HomePage, NotFoundPage, PostsPage, SinglePostsPage, SingleUserPage, UserPage} from "./pages";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<MainLayout/>}>
                <Route index element={< Navigate to={"/home"}/>}/>
                <Route path={"home"} element={<HomePage/>}/>
                <Route path={"users"} element={<UserPage/>}>
                    <Route path={":id"} element={<SingleUserPage/>}/>
                </Route>
                <Route path={"posts"} element={<PostsPage/>}>
                    <Route path={":id"} element={<SinglePostsPage/>}/>
                </Route>
                <Route path={"about"} element={<AboutePage/>}/>
                <Route path={"*"} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
