import { useContext } from "react";
import { ThemeContext } from "../../../../componenets/ThemeProvider";
export default function Project({params}){ 
    const {theme, toggleTheme } = useContext(ThemeContext);
    return(<div>Hello!
        {params.id}
    </div>);
}