
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

//HOC
import HomeHoc from "./HOC/Home.HOC";
import RestaurantHoc from "./HOC/Restaurant.Hoc";

//Pages
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import Overview from "./components/Restaurant/Overview";
import OrderOnline from "./components/Restaurant/OrderOnline";
import Reviews from "./components/Restaurant/Reviews/Reviews";
import Menu from "./components/Restaurant/Menu/Menu";
import Photos from "./components/Restaurant/Photos/Photos";


function App() {


  return (
   <>
       <HomeHoc exact component={HomePage} path = "/"/>
       <HomeHoc exact component={HomePage} path = "/:type"/>
       <RestaurantHoc exact component={RestaurantPage} path = "/restaurant/:id"/>
       <RestaurantHoc path="/restaurant/:id/overview" component={Overview}/>
        <RestaurantHoc path="/restaurant/:id/order-online" component={OrderOnline}/>
       <RestaurantHoc path="/restaurant/:id/menu" component={Menu}/>
       <RestaurantHoc path="/restaurant/:id/reviews" component={Reviews}/>
       <RestaurantHoc path="/restaurant/:id/photos" component={Photos}/>

</>
  )
}

export default App;
