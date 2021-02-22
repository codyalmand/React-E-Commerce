import React from 'react';
import data from '../data';

function ProductScreen(props) {
    const product = data.products.find(x => Number(x._id) === Number(props.match.params.id));
    return <div>
        <h1>{product.name}</h1>
    </div>
}

export default ProductScreen;