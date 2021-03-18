import logo from "./logo.svg";
import "./App.css";
import  Footer from "./composants/Footer";
import FirstVideo from "./composants/FirstVideo";
import SecondVideo from "./composants/SecondVideo";

function App() {
    return (
        <div>
            <div className='video'>
            <FirstVideo/>
            <SecondVideo/>
            </div>
            
            <Footer />
        </div>
    );
}

export default App;
