import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from "../Route";
import Header from "./Header";
import Footer from "./Footer";
import {useEffect} from "react";
import {handleInitialData} from "../Actions/products";
import {useDispatch} from "react-redux";
function App() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(handleInitialData());
    }, [])

  return (
    <Router>
        <Header/>
        <AppRouter/>
        <Footer/>
    </Router>
  );
}

export default App;