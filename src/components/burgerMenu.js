import React, {useState} from "react"

export default function BurgerMenu(){
    const [open, setOpen] = useState(false)

    return(
        <div className="burger-menu" onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </div>
    )
}