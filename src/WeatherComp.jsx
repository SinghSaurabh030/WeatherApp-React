import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";

export default function weatherComp(){
    let [result,setResult]=useState({
        
city: "Enter Name",
humidity: 0,
temp: 0,
tempMax: 0,
tempMin:0
    });

    async function Getter(result){
        setResult(result);
    }
    return (
        <>
            <SearchBox Getter={Getter}/>
            <InfoBox result={result}/>
            </>
    );
}