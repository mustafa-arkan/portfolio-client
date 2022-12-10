import { createBrowserRouter } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Home/Contact/Contact";
import Home from "../components/Home/Home";
import Main from "../Layout/Main";







export const router=createBrowserRouter([


{
path:'/',
element:<Main></Main>,
children:[

    {

        path:'/',
        element:<Home></Home>
        
        
        },

{

path:'/contact',
element:<Contact></Contact>




},





        {

path:'/footer',
element:<Footer></Footer>



        }
        







]

},







{
path:'*',
// element:<PageNotFound></PageNotFound>


}



])
export default router