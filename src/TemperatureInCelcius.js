import React,{useState,useEffect} from "react";
import axios from "axios";
export const TemperatureInCelcius = () => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response => setUsers(response.data));
    }, []);
    return (
      <div>
        <h2>The JSON below is loaded from an external API!</h2>
        <code>{JSON.stringify(users)}</code>
      </div>
    );
  }
  export default TemperatureInCelcius
 