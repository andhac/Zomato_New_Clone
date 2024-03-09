
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

//HOC
import HomeHoc from "./HOC/Home.HOC";
import RestaurantHoc from "./HOC/Restaurant.Hoc";

//Pages
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";


function App() {


  return (
   <>
       <HomeHoc exact component={HomePage} path = "/"/>
       <HomeHoc exact component={HomePage} path = "/:type"/>
       <RestaurantHoc exact component={RestaurantPage} path = "/restaurant/:id"/>
       <RestaurantHoc path="/restaurant/:id/overview" component={HomePage}/>
        <RestaurantHoc path="/restaurant/:id/order-online" component={HomePage}/>
       <RestaurantHoc path="/restaurant/:id/menu" component={HomePage}/>
       <RestaurantHoc path="/restaurant/:id/reviews" component={HomePage}/>
       <RestaurantHoc path="/restaurant/:id/photos" component={HomePage}/>

</>
  )
}

export default App;
