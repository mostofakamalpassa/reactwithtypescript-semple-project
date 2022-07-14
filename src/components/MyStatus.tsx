type PropStatus = {
    status: "loading" | "success" | 'error'
}


export const MyStatus = (props: PropStatus)=>{
    let message = '';

    if(props.status === 'loading'){
        message = "Loading"
    }else if(props.status === 'success'){
        message = 'Success';
    }else if(props.status === 'error'){
        message = 'Error'
    }


    return(
        <div>{message}</div>
    )
}