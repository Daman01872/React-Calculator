import React, { useState } from 'react';

import "./App.css";
import Footer from './Project2/Footer';
import Header from './Project2/Header';
import Input from './Project2/Input';
import Output from './Project2/Output';
import MainComponent from './ReactAddSubtractProject/MainComponent';


function App() {
const[result,setResult]= useState([])

function AddResults(input){
setResult([
  ...result,input
])
}



  return (
    <div className="App">
     {/*====================== Assignment_1===================== */}
  {/* <MainComponent/> */}
  
   {/*====================== Assignment_2===================== */}

   <Header/>
   <Input AddResults={AddResults}/>
   <Output result={result}/>
   <Footer/>
  
    </div>
  );
}

export default App;
