import { toast } from "react-toastify";
const getStoreData =()=>{
    const storedDataStr = localStorage.getItem('readList');
    if(storedDataStr){
        const storedData = JSON.parse(storedDataStr)
        return storedData
    }
    return []
}

const setData =(id)=>{
    const storedData = getStoreData()
    if(storedData.includes(id)){
        return toast.error('Book Already Exist')
    }else{
        storedData.push(id)
        const storedDataStr = JSON.stringify(storedData)
        localStorage.setItem('readList', storedDataStr)
        toast.success('Book Added')
    }
}

const getStoreWishList =()=>{
    try {
        const storedWishListStr = localStorage.getItem('wishList');
        if (storedWishListStr) {
            return JSON.parse(storedWishListStr);
        }
    } catch (error) {
        console.error("Failed to parse wish list:", error);
        localStorage.removeItem('wishList');
    }
    return [];
}

const storeWishListData =(id)=>{
    const storeData= getStoreWishList()
    if (!storeData.includes(id)) {
        storeData.push(id);
        localStorage.setItem('wishList', JSON.stringify(storeData))
        toast.success('Book Added')
    } else {
        toast.error('Item Already in Wishlist');
    }
}


const markAsReadHandler =(id)=>{
    const storedData = getStoreData(); 
    const updatedData = storedData.filter(item => item !== id);
    console.log(updatedData)
    localStorage.setItem('readList', JSON.stringify(updatedData))
    toast.success('Book Removed')
}
const removeItem =(id)=>{
    const storedData = getStoreWishList(); 
    const updatedData = storedData.filter(item => item !== id);
    localStorage.setItem('wishList', JSON.stringify(updatedData))
    toast.success('Book Removed')
}
export{setData,storeWishListData,getStoreData,getStoreWishList,removeItem,markAsReadHandler}