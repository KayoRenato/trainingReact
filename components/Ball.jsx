export default function Ball(props) {
    const styleBall = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: '#e3ddb2',
        color: '#161515',
        fontWeight: 'bold',
        margin: '8px'
    }

    return (
        <div style={styleBall}>
            {props.value}
        </div>
    );
}