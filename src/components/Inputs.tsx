type InputProps = {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Inputs = (props: InputProps)=>{
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(event)
  }

    return(

        <input type='text' value ={props.value} onChange={handleChange}/>
    )
}