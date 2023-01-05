import { useState } from "react";

export default function counter() {

    const [value, setValue] = useState(0)

    const plus = () => setValue(value + 1)
    
    function minus() {
        setValue(value - 1)
    }

    const styleContent = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222',
        color: '#562e98',
        height: '100vh'
    }

    const styleButton = {
        height: 32,
        width: 32,
        borderRadius: '50%',
        backgroundColor: '#ba9fea',
        color: '#562e98',
        textAlign: 'center',
        fontSize: '16px',
        margin: '8px'
    }

    return (
        <div style={styleContent}>
            <h1>Counter</h1>
            <div style={{color: '#6def6b'}} >Value: {value}</div>
            <div>
                <button style={styleButton} onClick={minus}> - </button>
                <button style={styleButton} onClick={plus}> + </button>
            </div>
        </div>
    );
}