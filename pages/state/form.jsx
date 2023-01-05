import { useState } from "react";

export default function forms() {
    const [value, setValue] = useState("");


    function changeInput() {
        setValue(value + '!');
    }

    return (
        <div style={
            {
                display: 'flex',
                backgroundColor: '#333',
                flexDirection: 'column',
                height: '100vh',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }
        }>
            <input type="text" value={value}
                onChange={e => setValue(e.target.value)} />
            <button style={{padding: '8px', margin: '16px'}} onClick={changeInput}> Change Value Input </button>

            <span>{value}</span>
        </div>
    );
}