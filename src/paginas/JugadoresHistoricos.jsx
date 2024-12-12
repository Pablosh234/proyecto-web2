import { Button, ButtonGroup, CardBody, CardSubtitle, CardText,Card, CardTitle, Col, Container, Row } from "reactstrap";
import NavbarHistoria from "../Components/NavbarHistoria/NavbarHistoria";


export default function JugadoresHistoricos(){
    return(
        <div className="container">
            <Container>
                <Row>
                    <Col xs="12">
                        <NavbarHistoria />
                    </Col>
                </Row>
                <Row>
                    <Col xs="2"></Col>
                    <Col xs="8"><h1 className="tittle-history"><strong>Jugadores Historicos</strong></h1></Col>
                </Row>
                <Row style={{marginTop:"5px"}} className="fila">
                    <Col xs="4">
                        <Card
                            style={{
                                width: '100%',
                                padding:'0px'
                            }}
                            >
                            <img
                                alt="Sample"
                                src="https://www.fcbarcelona.com/photo-resources/2024/10/17/5dadc6c9-0af7-46e8-8ce2-8b559f654dcf/OtroPSG_1_pic_2017-03-08otrobarcelona-psg28.jpg?width=640&height=400"
                            />
                            <CardBody>
                                <CardTitle>
                                    <h1>Sergi Roberto</h1>
                                </CardTitle>
                                <CardText>
                                    <p>Con el sueño de jugar en el primer equipo</p>
                                </CardText>
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
                                src="https://www.fcbarcelona.com/photo-resources/2023/12/01/c72348c0-06d7-4b8a-9841-86cb2af2d305/JORDI-ALBA.jpg?width=640&height=400"
                            />
                            <CardBody>
                                <CardTitle>
                                    <h1>Jordi Alba</h1>
                                </CardTitle>
                                <CardText>
                                    <p>Extraordinario velocista vestido de lateral</p>
                                </CardText>
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
                                src="https://www.fcbarcelona.com/photo-resources/2023/07/04/6c338fd5-a265-4733-a6d1-0a9645873c2d/2022-05-20_FCBvsREIALSOCIETAT_134.jpg?width=640&height=400"
                            />
                            <CardBody>
                                <CardTitle>
                                    <h1>Sergio Busquets</h1>
                                </CardTitle>
                                <CardText>
                                    <p>De tercera Division a ganar el sextete con el primer equipo</p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row style={{marginTop:"5px"}} className="fila">
                    <Col xs="4">
                        <Card
                            style={{
                                width: '100%',
                                padding:'0px'
                            }}
                            >
                            <img
                                alt="Sample"
                                src="https://www.fcbarcelona.com/photo-resources/2020/05/07/d04b2ae1-f408-4d19-bfd2-dec71cac5fb3/PIQUE_007-min.JPG?width=640&height=400"
                            />
                            <CardBody>
                                <CardTitle>
                                    <h1>Gerard Pique</h1>
                                </CardTitle>
                                <CardText>
                                    <p>Jugador del FC Barcelona identidicado con los colores azulgrana</p>
                                </CardText>
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
                                src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/19/e373fbfa-02e3-41e2-badc-48d59df458f1/Dani-Alves.jpg"
                            />
                            <CardBody>
                                <CardTitle>
                                    <h1>Dani Alves</h1>
                                </CardTitle>
                                <CardText>
                                    <p>El mejor lateral derecho en la historia del Barcelona</p>
                                </CardText>
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
                                src="https://www.fcbarcelona.com/photo-resources/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg?width=640&height=400"
                            />
                            <CardBody>
                                <CardTitle>
                                    <h1>Leo Messi</h1>
                                </CardTitle>
                                <CardText>
                                    <p>El mejor jugador de todos los tiempos y el mejor jugador de la historia del FC Barcelona</p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row style={{marginTop:"5px"}} className="fila">
                    <Col xs="4">
                        <Card
                            style={{
                                width: '100%',
                                padding:'0px'
                            }}
                            >
                            <img
                                alt="Sample"
                                src="https://www.fcbarcelona.com/photo-resources/2020/09/06/c7355114-245c-48a3-b5fe-0cea11dc9379/SUAREZ-56-min.jpg?width=640&height=400"
                            />
                            <CardBody>
                                <CardTitle>
                                    <h1>Luis Suarez</h1>
                                </CardTitle>
                                <CardText>
                                    <p>Ha sido de los mejores delanteros de la historia del club</p>
                                </CardText>
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
                                src="https://www.fcbarcelona.com/photo-resources/2024/03/08/0165f17d-f7b0-4d00-a597-edeee71dbfcd/RAKITIC.jpg?width=640&height=400"
                            />
                            <CardBody>
                                <CardTitle>
                                    <h1>Ivan Rakitic</h1>
                                </CardTitle>
                                <CardText>
                                    <p>Fue uno de los principales Centrocampistas que tuvo el equipo desde que llego en 2014</p>
                                </CardText>
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
                                src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/09/21/3461628c-e62c-4570-8996-1e7592ee55fa/39537642.jpg"
                            />
                            <CardBody>
                                <CardTitle>
                                    <h1>Andres Iniesta</h1>
                                </CardTitle>
                                <CardText>
                                    <p>Ha sido uno de los jugadores mas emblematicos en la historia del FC Barcelona</p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row style={{marginTop:"5px"}} className="fila">
                    <Col xs="4">
                        <Card
                            style={{
                                width: '100%',
                                padding:'0px'
                            }}
                            >
                            <img
                                alt="Sample"
                                src="https://www.fcbarcelona.com/photo-resources/2024/03/08/3983f5e0-d7fc-4fdf-8908-d7f9d513ce5b/NEYMAR.JPG?width=640&height=400"
                            />
                            <CardBody>
                                <CardTitle>
                                    <h1>Neymar da Silva</h1>
                                </CardTitle>
                                <CardText>
                                    <p>Aterrizo en el Barcelona para hacer una de las mejores tempradas de su vida</p>
                                </CardText>
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
                                src="https://www.fcbarcelona.com/photo-resources/2024/03/08/1d6bebcd-0779-4ca1-8417-541882afc430/PEDRO.jpg?width=640&height=400"
                            />
                            <CardBody>
                                <CardTitle>
                                    <h1>Pedro Rodriguez</h1>
                                </CardTitle>
                                <CardText>
                                    <p>Era uno de los jugadores mas versatiles del equipo</p>
                                </CardText>
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
                                src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/19/dd507edf-a7e4-4ddf-9305-fbbf73e5b2f2/4691622.jpg"
                            />
                            <CardBody>
                                <CardTitle>
                                    <h1>Xavi Hernandez</h1>
                                </CardTitle>
                                <CardText>
                                    <p>El mejor jugador de la historia del futbol de España</p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row style={{marginTop:"5px"}} className="fila">
                    <Col xs="4">
                        <Card
                            style={{
                                width: '100%',
                                padding:'0px'
                            }}
                            >
                            <img
                                alt="Sample"
                                src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/19/35c5bf00-41e9-4f9b-ae5d-3af2a8be55b8/4696525.jpg"
                            />
                            <CardBody>
                                <CardTitle>
                                    <h1>Victor Valdes</h1>
                                </CardTitle>
                                <CardText>
                                    <p>Fue portero del primer equipo durante 12 tempradas</p>
                                </CardText>
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
                                src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/19/08fa9043-99d6-4c15-94d2-99a420b60419/3965444.jpg"
                            />
                            <CardBody>
                                <CardTitle>
                                    <h1>Carles Puyol</h1>
                                </CardTitle>
                                <CardText>
                                    <p>Ha sido de los jugadores mas importantes en la historia del Barcelona</p>
                                </CardText>
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
                                src="https://www.fcbarcelona.com/photo-resources/2024/03/08/0529b629-8baa-4e1b-9481-05ab5ec71900/DAVID-VILLA.jpg?width=640&height=400"
                            />
                            <CardBody>
                                <CardTitle>
                                    <h1>David Villa</h1>
                                </CardTitle>
                                <CardText>
                                    <p>Fue uno de los delanteros mas contundentes en su epoca en el Barcelona</p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row style={{marginTop:"5px"}} className="fila">
                    <Col xs="4">
                        <Card
                            style={{
                                width: '100%',
                                padding:'0px'
                            }}
                            >
                            <img
                                alt="Sample"
                                src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/19/9468c1a1-2883-4202-b2eb-f4d7691f3ff6/4665030.jpg"
                            />
                            <CardBody>
                                <CardTitle>
                                    <h1>Samuel Eto'o</h1>
                                </CardTitle>
                                <CardText>
                                    <p>Tambine llamado el Leon Indomable, el delantero que no se rendia</p>
                                </CardText>
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
                                src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/19/cf92b8e0-e57f-4b93-853b-f3932f5ba165/4584451.jpg"
                            />
                            <CardBody>
                                <CardTitle>
                                    <h1>Anderson Luis de Souza</h1>
                                </CardTitle>
                                <CardText>
                                    <p>Era un futbolista de caracter ganador,inteligencia tactica  y espiritu colectivo</p>
                                </CardText>
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
                                src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/19/9fd0f501-9be1-4a14-9f7c-f5f4e6f8bdf9/4664952.jpg"
                            />
                            <CardBody>
                                <CardTitle>
                                    <h1>Ronaldinho</h1>
                                </CardTitle>
                                <CardText>
                                    <p>Tambien llamado el Mago fue el brasilero que llego al equipo para revolucionar el juego y hacer frente a los Galacticos del Real Madrid</p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}