import listProduct from '../../data/listProduct'

export default function repetition2() {

    const withBord = {
        border: '1px solid white',
        padding: '10px',
        margin: '10px',
        background: 'rgba(53, 57, 59, 0.65)',
    }

    function renderProduct() {
        return listProduct.map(product => {
            return (
                <tr key={product.id}>
                    <td style={withBord}>{product.id}</td>
                    <td style={withBord}>{product.name}</td>
                    <td style={withBord}>€ {product.price}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table style={
                withBord}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>

                    {renderProduct()}
                </tbody>
            </table>
        </div >
    );
}