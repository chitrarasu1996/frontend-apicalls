
import './App.css';
import { Routes,Route } from 'react-router-dom';


import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from './components/ProductList';
// import { createContext } from 'react';
import Post from './components/Post';
import Update from './components/Update';
import { createContext, useState } from 'react';

export const prodcutContext=createContext([])


function App() {

  const [updateProducts,setUpdateProducts]=useState({
    productName:"",
    category:"",
    price:""

  });


  const updateProductDetails=(values)=>{

    setUpdateProducts(details=>{
      return({...details,...values})
    })
  }
  return (
  

 
    <div className="App">
   
   <prodcutContext.Provider value={{updateProducts:updateProducts,updateProductDetails:updateProductDetails,setUpdateProducts:setUpdateProducts}} >
        <Routes >
       
<Route path='/' element={<ProductList/>} />
<Route path="/post" element={<Post/>}/>
   <Route path="/update" element={<Update/>} />
     </Routes>
     </prodcutContext.Provider>
    
    </div>
  
  );
}

export default App;
