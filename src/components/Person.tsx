import React from "react"
import {PeresonName} from './Person.types'

export const Person = (props:PeresonName) =>{


        return(
            <div>
                <p>Hello First Name : {props.name.first} and Last Name : {props.name.last}</p>
            </div>
        )
}