import logo from './logo.svg';
import React , {useState} from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import TextArea  from './Components/textArea';
import About from './Components/About';
import Alert from './Components/Alert'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {

  const[mode,setMode] = useState('light');  // whether dark mode is enabled or not  
  const[alert,setAlert]=useState (null);   // first set the value of alert as null

  const showAlert =(message,type)=>{
    setAlert ({
      msg:message,
      type:type

    });
    setTimeout(() => {
       setAlert(null)
    }, 2000);
  }
  
  const toggleMode =()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#2e304f';
      showAlert("Dark Mode activated", "success")
 
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light Mode activated", "success")
    }
  }


  return (
    <>

    {/* <Router> */}
     <NavBar title="TEXTUTILS" aboutOrg = "About"  mode={mode} toggleMode ={toggleMode} />
     <Alert alert = {alert}/>
     <div className="container my-3">
     {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
          
          </Route>
        </Switch> */}
    
     {/* <About/> */}
     <TextArea heading = "Enter the text to analyze" mode={mode} showAlert={showAlert}/>
     
     </div>
     {/* </Router> */}
     
    </>
   
    
    
  );
}
export default App;
