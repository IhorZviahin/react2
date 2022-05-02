import {CatForm, Cats, DogForm, Dogs} from "./components";
import css from "./App.module.css"


function App() {
    return (
        <div>
            <div className={css.Form_wrapper}>
                <CatForm/>
                <DogForm/>
            </div>
            <hr/>

            <div className={css.wrapper}>
                <Cats/>
                <Dogs/>
            </div>


        </div>
    );
}

export default App;
