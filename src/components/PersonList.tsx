import React from "react";
import { Name } from "./Person.types";
/* type PropNameList = {
    nameList:{ first:string; last:string}[]
} */

type PropNameList = {
    nameList:Name[]
}
/* type PropNameList = {
    nameList:[{ first:string; last:string}]
} give error  */
export const PersonList = (props: PropNameList)=>{

    return(
        <div>
            {props.nameList.map((val, index)=>{
                return <p key={index}> first Name : {val.first} and Last Name : {val.last}</p>
            })}
        </div>
    )
}