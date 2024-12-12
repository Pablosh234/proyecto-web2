import { Col, Container, Row ,ButtonGroup,Button,Card,CardBody, CardTitle, CardSubtitle, CardText} from "reactstrap";
import './Historia.css'
import Acordeon from "../Components/Acordeon";
import { Link } from "react-router";
import NavbarHistoria from "../Components/NavbarHistoria/NavbarHistoria";

export default function Historia(){
    return(
        <div>
            <Container>
               <Row>
                    <Col xs="12">
                        <NavbarHistoria />
                    </Col>
               </Row>
               <Row>
                    <Col xs="2"></Col>
                    <Col xs="8"><h1 className="tittle-history"><strong>Decada a Decada</strong></h1></Col>
               </Row>
               <Row className="Fila">
                    <Col xs="4">
                        <Card
                            style={{
                                width: '100%',
                                padding:'0px'
                            }}
                            >
                            <img
                                alt="Sample"
                                src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/11/27/4b089d59-e50c-489f-91d2-8c306d86f6ac/mini_MESSI-E-INIESTA-COPA-01.jpg"
                            />
                            <CardBody>
                                <Acordeon title="2008-2020. Los mejores exitos deportivos de la historia" parrafo="El Fc Barcelona maravilla al mundo con un estilo de juego  que hace que las delicias de cualquier aficionado del futbol. Se gana tres Ligas de Campeones en unos años" />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="4">
                        <Card
                            style={{
                                width: '100%',
                                padding:'0px'
                            }}
                            >
                            <img
                                alt="Sample"
                                src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/13/e53c3272-a19a-405c-9cb2-d6aa41c48571/16070253.jpg"
                            />
                            <CardBody>
                                <Acordeon title="1996-2008 Un club centenario" parrafo="Los actos conmemorativos fueron una fiesta del Barcelonismo, un recorrido emotivo por la historia del Club que se celebro por todo un año" />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="4">
                        <Card
                            style={{
                                width: '100%',
                                padding:'0px'
                            }}
                            >
                            <img
                                
                                alt="Sample"
                                src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/13/b8bdc8d5-5e2e-46e0-84f2-82535b52d07e/16183525.jpg"
                            />
                            <CardBody>
                                <Acordeon title="1988-1996 La era del Dream-Team" parrafo="El FC Barcelona gana su primera Copa Europea en 1992" />
                            </CardBody>
                        </Card>
                    </Col>
               </Row>
               <Row className="Fila">
                    <Col xs="4">
                        <Card
                            style={{
                                width: '100%',
                                padding:'0px'
                            }}
                            >
                            <img
                                alt="Sample"
                                src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/13/eced3112-e0ee-4779-b1e9-7929e9e32a77/16070582.jpg"
                            />
                            <CardBody>
                                <Acordeon title="1978-1988 Mas socios, mas estrellas." parrafo="Llegan futbolistas de ensueño, como ahora Maradona, Schuster o Quini, y surgen los primeros contratos multimillonarios y los derechos de television" />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="4">
                        <Card
                            style={{
                                width: '100%',
                                padding:'0px'
                            }}
                            >
                            <img
                                alt="Sample"
                                src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/13/a09686d7-ec65-47d1-b5c1-16cf46c97657/16183511.jpg"
                            />
                            <CardBody>
                                <Acordeon title="1969-1978 Cruyff, democracia" parrafo="Con Montal como presidente, sueño azulgrana de fichar a Johan Cruyff empezaba a ser posible" />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="4">
                        <Card
                            style={{
                                width: '100%',
                                padding:'0px'
                            }}
                            >
                            <img
                                
                                alt="Sample"
                                src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/13/1daa4219-fa96-4145-be85-3535e09a80dc/16183518.jpg"
                            />
                            <CardBody>
                                <Acordeon title="1961-1969 Nueva dimension social" parrafo="El club incremento el numero de socios a pesar de los malos resultados del equipo en los años sesenta" />
                            </CardBody>
                        </Card>
                    </Col>
               </Row>
               <Row className="Fila">
                    <Col xs="4">
                        <Card
                            style={{
                                width: '100%',
                                padding:'0px'
                            }}
                            >
                            <img
                                alt="Sample"
                                src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/13/c2fce063-06fe-49ed-9642-34ac074dcb3b/16183532.jpg"
                            />
                            <CardBody>
                                <Acordeon title="1950-1961 Kubala y su tiempo" parrafo="El club dobla sus masa social  y se construte el Camp Nou, inagurado durante la presidencia  de Francesc Miro-Sans el 24 de septiembre de 1957" />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="4">
                        <Card
                            style={{
                                width: '100%',
                                padding:'0px'
                            }}
                            >
                            <img
                                alt="Sample"
                                src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/13/d0b423ab-8c46-46f3-aedd-c849921a1787/16070638.jpg"
                            />
                            <CardBody>
                                <Acordeon title="1939-1950 Años de perseverancia" parrafo="La dura represion  y la depuracion llevada a cabo por las autoridades militares y civiles en los años de la posguerra desnaturalizo la entidad" />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="4">
                        <Card
                            style={{
                                width: '100%',
                                padding:'0px'
                            }}
                            >
                            <img
                                
                                alt="Sample"
                                src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/13/0c430c06-765a-4bbc-a351-32be243d2e7b/16070414.jpg"
                            />
                            <CardBody>
                                <Acordeon title="1930-1939 Luchando contra la historia" parrafo="La decada de los treinta estuvo marcada por una inestabilidad politica y una crisis general que inevitablemente afecto al FC Barcelona" />
                            </CardBody>
                        </Card>
                    </Col>
               </Row>
               <Row className="Fila">
                    <Col xs="4">
                        <Card
                            style={{
                                width: '100%',
                                padding:'0px'
                            }}
                            >
                            <img
                                alt="Sample"
                                src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/05/08/22c620b4-9c97-4264-805b-c29cc95cdfd7/16070133.jpg"
                            />
                            <CardBody>
                                <Acordeon title="1919-1929 Una epoca dorada" parrafo="El equipo acumula titulos y los jugadores se convierten en personajes populares e idolatrados" />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="4">
                        <Card
                            style={{
                                width: '100%',
                                padding:'0px'
                            }}
                            >
                            <img
                                alt="Sample"
                                src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/05/08/fb99c253-9fa2-4966-9880-4fc3882a20c8/16183504.jpg"
                            />
                            <CardBody>
                                <Acordeon title="1909-1919 Consolidacion en el campo de la calle Industria" parrafo="El crecimiento social de la identidad permitio el primer terreno de juego propio de Club" />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="4">
                        <Card
                            style={{
                                width: '100%',
                                padding:'0px'
                            }}
                            >
                            <img
                                
                                alt="Sample"
                                src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/13/7315687b-5d59-474b-9203-1105a3023c41/16070442.jpg"
                            />
                            <CardBody>
                                <Acordeon title="1899-1909 Nacimiento y Supervivencia" parrafo="Joan Gamper fundador del Club, fue su anima e impulsor durante los primeros 25 años de vida" />
                            </CardBody>
                        </Card>
                    </Col>
               </Row>
            </Container>
        </div>
        
    );
}