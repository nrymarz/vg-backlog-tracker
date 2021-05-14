import React, {useState} from "react"

export default function BurgerMenu({changeMenu, menu}){
    const [open, setOpen] = useState(false)

    const handleClick = e =>{
        setOpen(!open)
        changeMenu(open)
    }

    return(
        <div className="burger-menu" onClick={handleClick}>
            <div />
            <div />
            <div />
        </div>
    )
}