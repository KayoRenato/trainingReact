/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import Ball from "../../components/Ball";

import { createTicket } from '../../functions/lottery'

export default function lottery() {

    const [num, setNumber] = useState(6)
    const [ticket, setTicket] = useState([])

    useEffect(()=> {
        setTicket(createTicket())
    }, [])

    const styleContent = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#6b6666'
    }

    const styleButton = {
        backgroundColor: '#373434',
        color: '#fff',
        border: '1px solid #131313',
        borderRadius: '5px',
        padding: '5px 10px',
        marginTop: '24px'
    }

    function renderTicket() {
        return (ticket.map(
            number => <Ball key={number} value={number} />
        ))
    }

    return (
        <div style={styleContent}>
            <h1>Lottery Ticket</h1>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}>
                {renderTicket()}
            </div>
            <div>
                <input type="number"
                    min={6} max={20} 
                    value={num} 
                    onChange={ev => setNumber(ev.target.value)} 
                    style={{
                        padding: '5px 10px',
                        marginRight: '8px'
                    }}
                    />
                <button style={styleButton} onClick={() => setTicket(createTicket(num))}>
                    Generate Ticket
                </button>
            </div>
        </div>

    );
}