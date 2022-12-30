import {Row, Col, Pagination, Container} from 'react-bootstrap';
import { productsArray } from '../productsStore';
import ProductCard from '../components/ProductCard';
// [{... }, {... }, {... }]
function Store() {

    return (
        <>
            <h1 align="center" className="p-3">Welcome to the store!</h1>
            <div className='market-items'>
            <Row xs={1} md={3} className="g-4">
                {productsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product={product}/>
                    </Col>
                ))}
            </Row>
            </div>

        </>
    )
}

export default Store;