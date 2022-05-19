import React,{useState,useEffect} from "react";
const ClockwithHook =() =>{
    const [date, setDate] = useState(new Date());
    const tick = () =>{
        setDate(new Date());
    };
    useEffect(() =>{const timerID = setInterval(() => tick(),1000)
        return () => clearInterval(timerID);  
})
return (<div><h2>It is now{date.toLocaleTimeString()}.</h2></div>)
}
export default ClockwithHook;