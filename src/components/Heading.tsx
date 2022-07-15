import { ReactNode } from "react";

type PropsChildren = {
    children:ReactNode;
}
export const Heading = (props: PropsChildren)=>{

    return(
        <div>
            {props.children} 
        </div>
    )
}