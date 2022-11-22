import { Figure , Card, Button, Form, Row, Col, Container } from 'react-bootstrap';
import profile_pic from "./images/no-profile.jpg";

const Profile = () => {
    
    return(
        <>
        <Container>
            <Col md={{ span: 10, offset: 5 }}>
            <Figure>
                
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src={profile_pic}
                    roundedCircle 
                />
                <Figure.Caption>
                   <h1>User</h1> 
                </Figure.Caption>
            </Figure>
            </Col>
        </Container>
        </>
    )
}
export default Profile;