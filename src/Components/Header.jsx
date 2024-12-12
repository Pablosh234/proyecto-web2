import { useLocation } from "react-router";
import { Col, Row } from "reactstrap";

export const Header = () => {

    const { pathname } = useLocation();
    const paths = pathname.split('/');

    return (
        <Row className="title1">
            <Col xs="12" className="cont-title">
                <h1 className="title" style={{ textTransform: 'capitalize' }}><strong>{paths[paths.length - 1]}</strong></h1>
            </Col>
            
        </Row>
    )
}