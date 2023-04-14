import { useEffect, useState } from "react";
import { getProductsList,deleteProduct } from "../service/Update-api";
import "../styles/product.css"
import { useNavigate } from "react-router";
import { useContext } from "react";
import  {prodcutContext}  from "../App"
const ProductList=()=>{
   const navigate=useNavigate();
   const [productList,setProductList]=useState([]);
const {setUpdateProducts}=useContext(prodcutContext);



   useEffect(()=>{
    getallDetails()
   },[]);

   const getallDetails=async()=>{
    const data=await getProductsList();
 
    setProductList(data.data)
   };

   const deleteDetails=async(data)=>{
console.log("data,",data)
   await  deleteProduct(data);
   getallDetails()
   };

   const CreateProduct=()=>{
    navigate("/post")
   };


   const updateProduct=(data)=>{

    setUpdateProducts(data)
navigate("/update")
   }
    return(
       
       <div className="hole-product">
       <h1 >All Products</h1>
       <button className="btn btn-primary" onClick={CreateProduct}>create Product</button>
       <div  className="products-wrappper">
        
{productList.length?productList.map((data,i)=>(
    <div key={i} className="product">
        <p>Name:{data.productName}</p>
        <p>catergory:{data.category}</p>
        <p>price:{data.price}</p>
        <button onClick={()=>deleteDetails(data._id)} className="btn btn-danger">delete</button>
   <button className="btn btn-primary ms-1" onClick={()=>updateProduct(data)}>Update</button>
    </div>
)):<div><h2>Loading...</h2></div>}
</div></div>

      
    )
};

export default ProductList;