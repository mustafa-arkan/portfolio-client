
import Contact from "./Contact/Contact";
import Hero from "./Hero";

import './Home.css'




const Home = () => {
  

  return (
    <div >
     <Hero></Hero>
     <Contact></Contact>
     <button className="btn">Button</button>
<button className="btn btn-primary">Button</button>
<button className="btn btn-secondary">Button</button>
<button className="btn btn-accent">Button</button>
<button className="btn btn-ghost">Button</button>
<button className="btn btn-link">Button</button>

     
    </div>
  );
};

export default Home;