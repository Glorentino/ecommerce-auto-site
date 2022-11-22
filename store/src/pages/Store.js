import {Row, Col, Pagination, Container} from 'react-bootstrap';
import { productsArray } from '../productsStore';
import ProductCard from '../components/ProductCard';
// [{... }, {... }, {... }]
function Store() {

    return (
        <>
            <h1 align="center" className="p-3">Welcome to the store!</h1>
            <Row xs={1} md={3} className="g-4">
                {productsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product={product}/>
                    </Col>
                ))}
            </Row>
            <Container fluid>
            <Row >
                <Col md={{ span: 6, offset: 5 }}>
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
            </Col>
            </Row>
            </Container>
        </>
    )
}

export default Store;