import { useState } from "react";
import "../styles/post.css"
import { useNavigate } from "react-router";
import { postData } from "../service/Update-api";
const Post=()=>{
const navigate=useNavigate();
    const [productName,setProductName]=useState("");
    const [productCategory,setProductCategory]=useState("");
    const [productPrice,setProductPrice]=useState("");
 
    const postProduct=async(e)=>{
        e.preventDefault()
      if(productName.length>1&&productCategory.length>1&&productPrice.length>1){
        await postData({productName,category:productCategory,price:productPrice});
        navigate("/")
      }else{
        alert("please fill all fields")
      }
   
     
    };

 
    return (
<> 
        <div className="form-wrapper" >
        <form className="from-content" >
        <h1 className="mt-2 ">Post Product</h1>
           
<p>Product Name:<input placeholder="enter productname" className="rounded" value={productName} onChange={(e)=>setProductName(e.target.value)}/></p>
<p>Product Category:<input placeholder="enter category" className="rounded" value={productCategory} onChange={(e)=>setProductCategory(e.target.value)}/></p>
<p>Product Price:<input placeholder="enter price"  className="rounded" value={productPrice} onChange={(e)=>setProductPrice(e.target.value)}/></p>
<button className="btn btn-primary" onClick={postProduct}>Sumbit</button>
</form>
        </div></>
    )
};

export default Post;
