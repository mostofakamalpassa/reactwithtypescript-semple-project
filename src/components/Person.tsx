import React from "react"

type PeresonName = {
    name:{first:string, last:string}
}
export const Person = (props:PeresonName) =>{


        return(
            <div>
                <p>Hello First Name : {props.name.first} and Last Name : {props.name.last}</p>
            </div>
        )
}