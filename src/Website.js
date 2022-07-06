
import './Website.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import MainJ from "./Components/Main/Main";
import Vidget from "./Components/Vidgets/Vidget";

function Website() {
  return (
    <div className="Website">

       {/*Sidebar*/}
       <Sidebar/>
       {/*Main*/}
       <MainJ/>
       {/*Widgets*/}
       <Vidget/>

    </div>
  );
}

export default Website;
