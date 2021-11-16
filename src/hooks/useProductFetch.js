import axios from 'axios';
import { useEffect, useState } from 'react';

const useProductFetch = () => {
    const [products,setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://watch-zone.herokuapp.com/products')
            .then(res => setProducts(res.data))
    })
    
    return {products}
}

export default useProductFetch
