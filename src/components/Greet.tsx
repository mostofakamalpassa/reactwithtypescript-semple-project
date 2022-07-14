import React  from "react"

type GreetTypes = {
    name:string;
    isLogdIn? : boolean
}
export const Greet = (props:GreetTypes)=>{

    return(
        <div>
           {props.isLogdIn ?  <p> Hello {props.name} we love you </p> : <p> Welcome Guist</p>}
        </div>
    )
}