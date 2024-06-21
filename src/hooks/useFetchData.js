
import { useEffect } from "react";
import { addCardDetail, addPrevApi } from '../utils/cardSlice';
import { addNextApi } from '../utils/cardSlice';
import { useDispatch } from "react-redux";

const useFetchData =(currApi)=>{
    const Dispatch = useDispatch();
 
    const fetchData = async ()=>{
      
      let data = await fetch(currApi);
      const jsonData = await data.json();

      Dispatch(addCardDetail(jsonData?.results));
      Dispatch(addNextApi(jsonData?.next))
      Dispatch(addPrevApi(jsonData?.previous))
     // console.log(jsonData);
    }
    
    useEffect(()=>{
      fetchData();
    },[currApi]);
}

export default useFetchData;

