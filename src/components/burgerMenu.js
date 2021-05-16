import React, {useState} from "react"
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

export default function BurgerMenu({eventKey}){
    const [open, setOpen] = useState(false)
    const toggle = useAccordionToggle(eventKey, () => setOpen(!open))

    return(
        <div className="burger-menu" onClick={toggle}>
            <div style={{transform: open ? "rotate(45deg) translate(10px, 10px)" : "translateX(0px)"}}/>
            <div style={{background: open ? "transparent" : "white", transform: open ? "translateX(-30px)" : ""}}/>
            <div style={{transform: open ? "rotate(-45deg) translate(8px, -10px)" : "translateX(0px)"}}/>
        </div>
    )
}