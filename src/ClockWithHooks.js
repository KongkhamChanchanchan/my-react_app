import React,{ useState } from "react";
const ClockWithHooks=()=>{
    const [date,setDate]= useState(new Date());
    return (<div><h2>It is exact time {date.toLocaleTimeString()}.</h2></div>)
}
export default ClockWithHooks;