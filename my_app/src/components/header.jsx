'use client';
import { ThemeContext } from "./Context";
export default function Header(){
    const {state, f1} = ThemeContext();
    return(
    <div>
        <h1>Hello !</h1>
        {state}
        <button onClick={f1}>Click Me!</button>
    </div>
    )
}