import { Col, Container, Row } from "reactstrap";
import Carrusel from "./Components/Carrusel";
import './Principal.css'
import Carrusel2 from "./Components/Carrusel2";

export default function Principal(proops){
    return(
        <div className="cont">
            <Container>
                <Row style={{padding:"20px"}}>
                    <Col xs="12">
                        <h1>Algunos de nuestros Jugadores</h1>
                        <Carrusel2 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}