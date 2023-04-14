import { useState } from "react";
import { useNavigate } from "react-router";
import { updateProduct } from "../service/Update-api";
import { useContext } from "react";
import { prodcutContext } from "../App";
const Update=()=>{
    const navigate=useNavigate();
    const {updateProducts,updateProductDetails}=useContext(prodcutContext);

 
 
    const updateProductAllProduct=async(e)=>{
        e.preventDefault()
      if(updateProducts.price!==NaN&&updateProduct.length>1){
     
       await updateProduct(updateProducts._id,{productName:updateProducts.productName,category:updateProducts.category,price:updateProducts.price});
        navigate("/")}else{
            alert("hello")
        }
    }


    return(
        <div className="form-wrapper" >
        <form className="from-content" >
        <h1 className="mt-2">Update Product</h1>
           
<p>Product Name:<input placeholder="enter productname" className="rounded" value={updateProducts.productName} onChange={(e)=>updateProductDetails({productName:e.target.value})}/></p>
<p>Product Category:<input placeholder="enter category" className="rounded" value={updateProducts.category} onChange={(e)=>updateProductDetails({category:e.target.value})}/></p>
<p>Product Price:<input placeholder="enter price"  className="rounded" value={updateProducts.price} onChange={(e)=>updateProductDetails({price:e.target.value})}/></p>
<button className="btn btn-primary" onClick={updateProductAllProduct} type="submit">Sumbit</button>
</form>
        </div>
    )
};
export default Update;
