import { useEffect, useState } from 'react';
import { useParams } from 'react-router'

export default function SingleProduct() {
    console.log('SingleProduct Component rendered')

    const { id } = useParams();

    const [product, setProduct] = useState({});
    console.log('product', product)

    const get_product = async () => {
        console.log('Inside get_product')

        // const api = `http://localhost:8000/api/posts/${id}`;  // FOR ALIAA & ADAM  (((( ONLY ))))
        const api = `https://dummyjson.com/products/${id}`;

        const res = await fetch(api);

        setProduct(await res.json());
    }

    // useEffect(() => { }, []);
    console.log('Before useEffect')
    useEffect(() => {
        console.log('Inside useEffect')
        get_product();
    }, []);
    console.log('After useEffect')



    return (
        <div className='p-5'>
            <h1 className='text-center text-sky-600 text-2xl'>{product.title}</h1>


            <div>
                <img src={product.thumbnail} className='max-w-full' alt="" />
            </div>
        </div>
    )
}
