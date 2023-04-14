import axios from "axios"
const url="https://products-api-vbbr.onrender.com/products/"

export const getProductsList=async()=>{
    const data= await axios.get(url)
    return data.data
};

export const deleteProduct=async(dataId)=>{
  
    await axios.delete(url+dataId);
   

}




export const postData=async(productdata)=>{
   
await axios.post(url,productdata);
    

};

export const updateProduct=async(id,updateData)=>{
   
    await axios.put(url+id,updateData);

}
