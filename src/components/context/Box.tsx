import { useContext } from 'react'
import {ThemeContext} from './ThemeContext'
// step 4: useContext 
export const Box = ()=>{

    const theme = useContext(ThemeContext)
    return <div style={{backgroundColor:theme.primary.main, color:theme.primary.text}}>Theme Context</div>
}