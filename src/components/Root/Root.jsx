import { Outlet } from "react-router-dom";
import Footer from '../Footer/Footer.jsx'
import Header from "../Header/Header.jsx";


const Root = () => {
    return (
        <div>
           <div className="max-w-6xl mx-auto">
           <Header></Header>
           <Outlet></Outlet>
           </div>
          <div  className='max-w-6xl mx-auto'>
          <Footer></Footer>
          </div>
        </div>
    );
};

export default Root;