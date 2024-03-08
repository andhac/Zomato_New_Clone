
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//HOC
import HomeHoc from "./HOC/Home.HOC";

//Pages
import HomePage from "./pages/HomePage";



function App() {
  return (
   <>
       <HomeHoc component={HomePage} path = "/"/>
       <HomeHoc component={HomePage} path = "/:type"/>
</>
  )
}

export default App;
