import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from "./Route";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {observer} from "mobx-react-lite";
function App() {
  return (
    <Router>
        <Header/>
        <AppRouter/>
        <Footer/>
    </Router>
  );
}

export default observer(App);