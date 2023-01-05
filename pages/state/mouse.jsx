/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

export default function mouse() {
    
        const [x, setX] = useState(0)
        // let x = arrayX[0]
        // const setX = arrayX[1]
        
    
        const arrayY = useState(0)
        let y = arrayY[0]
        const setY = arrayY[1]


    const styleMouse = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222',
        color: '#e0d730',
        height: '100vh',
    }
    

    function whenMove (ev){
        // console.log(ev.clientX, ev.clientY)
        setX(ev.clientX)
        setY(ev.clientY)
    }

    return (
        <div style={styleMouse} onMouseMove={whenMove}>
            <span> X Axies: {x} </span>
            <span> Y Axies:  {y} </span>
        </div>
    );
}