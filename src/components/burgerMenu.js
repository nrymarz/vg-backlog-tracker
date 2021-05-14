import React, {useState} from "react"

export default function BurgerMenu({changeMenu}){
    const [open, setOpen] = useState(false)

    const handleClick = e =>{
        setOpen(!open)
        changeMenu(open)
    }

    return(
        <div className="burger-menu" onClick={handleClick}>
            <div style={{transform: open ? "rotate(45deg) translate(10px, 10px)" : "translateX(0px)"}}/>
            <div style={{background: open ? "transparent" : "white", transform: open ? "translateX(-30px)" : ""}}/>
            <div style={{transform: open ? "rotate(-45deg) translate(8px, -10px)" : "translateX(0px)"}}/>
        </div>
    )
}