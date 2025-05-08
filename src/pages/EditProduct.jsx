import { useParams } from 'react-router'

export default function EditProduct() {

    const { id } = useParams();
    
    console.log('id', id);

    return (
        <div>Edit Product {id}</div>
    )
}
