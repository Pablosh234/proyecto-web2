import { Container, Row, ButtonGroup, Button, Col } from "reactstrap";
import './Plantilla.css'

export default function Plantilla() {
    return(
        <div className="contenedor">
            <Container>
                <Row>
                    <h1  style={{textAlign: "left" }}>Fc Barcelona Team</h1>
                </Row>
                <Row>
                    <h1 style={{textAlign:"center"}}>Primer Equipo</h1>
                </Row>
                <Row style={{padding:"20px",backgroundColor:"midnightblue",margin:"10px"}}>
                    <Col><h1 style={{color:"white"}}>Porteros</h1></Col>
                </Row>
                <Row>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/13/f6d023f4-d247-414a-9bc0-3feed0d8c148/01-Ter_Stegen-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/13/c94496a3-0d58-48a5-b61d-7412d99f0a7a/13-Inaki_Pena-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/14/dd630dfe-4d4d-4e09-a6f6-4e176382f5aa/25-Szczesny-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>
                </Row>
                <Row>
                    <Col xs="1" style={{fontSize:"30px", textAlign:"right", fontFamily:"cursive"}}><p>Marc</p></Col>
                    <Col xs="3" style={{textAlign:"left"}}><h1>Ter Stegen</h1></Col>
                    <Col xs="2" style={{fontSize:"30px", textAlign:"right", fontFamily:"cursive"}}><p>Iñaki</p></Col>
                    <Col xs="2" style={{textAlign:"left"}}><h1>Peña</h1></Col>
                    <Col xs="2" style={{fontSize:"30px", textAlign:"right", fontFamily:"cursive"}}><p>Wojciech</p></Col>
                    <Col xs="2" style={{textAlign:"left"}}><h1>Szczęsny</h1></Col>
                </Row>
                <Row style={{padding:"20px",backgroundColor:"midnightblue",margin:"10px"}}>
                    <Col><h1 style={{color:"white"}}>Defensas</h1></Col>
                </Row>
                <Row>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/13/77bc3c02-a6ac-43ea-b5aa-3ec8a9a26289/02-Cubarsi-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/13/dee2330a-0f74-45a4-8757-fc12dd7eec03/03-Balde-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/13/095e289a-3615-4689-84b4-5b84c3011347/04-Araujo-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>  
                </Row>
                <Row>
                    <Col xs="2" style={{fontSize:"30px", textAlign:"right", fontFamily:"cursive"}}><p>Pau</p></Col>
                    <Col xs="2" style={{textAlign:"left"}}><h1>Cubarsi</h1></Col>
                    <Col xs="2" style={{fontSize:"30px", textAlign:"right", fontFamily:"cursive"}}><p>Alejandro</p></Col>
                    <Col xs="2" style={{textAlign:"left"}}><h1>Balde</h1></Col>
                    <Col xs="2" style={{fontSize:"30px", textAlign:"right", fontFamily:"cursive"}}><p>Ronald</p></Col>
                    <Col xs="2" style={{textAlign:"left"}}><h1>Araujo</h1></Col>
                </Row>
                <Row>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/13/090c9e0c-4446-44c0-ba4b-995dd818cb24/05-Martinez-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/13/a7d1b4c0-45f0-496d-89e9-576a49f5cdb0/15-Christensen-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/13/34c0073f-7235-4776-a508-8fccc377f57b/23-Kounde-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>  
                </Row>
                <Row>
                    <Col xs="2" style={{fontSize:"30px", textAlign:"right", fontFamily:"cursive"}}><p>Iñigo</p></Col>
                    <Col xs="2" style={{textAlign:"left"}}><h1>Martinez</h1></Col>
                    <Col xs="2" style={{fontSize:"30px", textAlign:"right", fontFamily:"cursive"}}><p>Andreas</p></Col>
                    <Col xs="2" style={{textAlign:"left"}}><h1>Christensen</h1></Col>
                    <Col xs="2" style={{fontSize:"30px", textAlign:"right", fontFamily:"cursive"}}><p>Jules</p></Col>
                    <Col xs="2" style={{textAlign:"left"}}><h1>Kounde</h1></Col>
                </Row>
                <Row>
                    <Col xs="4"></Col>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/13/50bc6121-4afa-4b62-bd10-d4dcb9bfcfb4/24-Eric_Garcia-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>
                </Row>
                <Row>
                    <Col xs="2"></Col>
                    <Col xs="2"></Col>
                    <Col xs="2" style={{fontSize:"30px",textAlign:"right",fontFamily:"cursive"}}><p>Eric</p></Col>
                    <Col xs="2" style={{textAlign:"left"}}><h1>Garcia</h1></Col>
                </Row>
                <Row style={{padding:"20px",backgroundColor:"midnightblue",margin:"10px"}}>
                    <Col><h1 style={{color:"white"}}>Centrocampistas</h1></Col>
                </Row>
                <Row>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/13/d650999a-797a-4326-b0fe-cc5e1d8a9322/06-Gavi-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/13/350837be-717b-4b17-9e66-ef201caac7ae/08-Pedri-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/18/7ae45187-32b6-42e7-a0b6-708a3bcd7b76/14-Pablo_Torre-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>  
                </Row>
                <Row>
                    <Col xs="1"></Col>
                    <Col xs="3" style={{textAlign:"left"}}><h1>Gavi</h1></Col>
                    <Col xs="1"></Col>
                    <Col xs="3" style={{textAlign:"left"}}><h1>Pedri</h1></Col>
                    <Col xs="2" style={{fontSize:"30px", textAlign:"right", fontFamily:"cursive"}}><p>Pablo</p></Col>
                    <Col xs="2" style={{textAlign:"left"}}><h1>Torre</h1></Col>
                </Row>
                <Row>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/13/caa869d5-91f6-4d7e-9b60-8eba98ac60f4/16-Fermin-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/13/1c3026e0-0aa9-4c20-ae49-714c73f68685/17-Casado-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/13/0d46bf0d-5149-4908-9187-35813907233d/20-Olmo-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>  
                </Row>
                <Row>
                    <Col xs="2" style={{fontSize:"30px", textAlign:"right", fontFamily:"cursive"}}><p>Fermin</p></Col>
                    <Col xs="2" style={{textAlign:"left"}}><h1>Lopez</h1></Col>
                    <Col xs="2" style={{fontSize:"30px", textAlign:"right", fontFamily:"cursive"}}><p>Marc</p></Col>
                    <Col xs="2" style={{textAlign:"left"}}><h1>Casado</h1></Col>
                    <Col xs="2" style={{fontSize:"30px", textAlign:"right", fontFamily:"cursive"}}><p>Dani</p></Col>
                    <Col xs="2" style={{textAlign:"left"}}><h1>Olmo</h1></Col>
                </Row>
                <Row>
                    <Col xs="4"></Col>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/13/2b17db58-6bb5-40fb-b978-65b2fea50db1/21-De_Jong-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>
                </Row>
                <Row>
                    <Col xs="2"></Col>
                    <Col xs="2"></Col>
                    <Col xs="2" style={{fontSize:"30px",textAlign:"right",fontFamily:"cursive"}}><p>Frenkie</p></Col>
                    <Col xs="2" style={{textAlign:"left"}}><h1> De Jong</h1></Col>
                </Row>
                <Row style={{padding:"20px",backgroundColor:"midnightblue",margin:"10px"}}>
                    <Col><h1 style={{color:"white"}}>Delanteros</h1></Col>
                </Row>
                <Row>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/13/673eb7cc-5a07-4b94-a6d1-310fc7ca9248/07-Ferran_Torres-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/13/b666059e-1d0a-493f-a7e5-dd7a258d8165/09-Lewandowski-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/13/6694bfce-d682-4af7-bf06-151d747553a7/10-Ansu_Fati-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>  
                </Row>
                <Row>
                    <Col xs="2" style={{fontSize:"30px", textAlign:"right", fontFamily:"cursive"}}><p>Ferran</p></Col>
                    <Col xs="2" style={{textAlign:"left"}}><h1>Torres</h1></Col>
                    <Col xs="1" style={{fontSize:"30px", textAlign:"right", fontFamily:"cursive"}}><p>Robert</p></Col>
                    <Col xs="3" style={{textAlign:"center"}}><h1>Lewandowski</h1></Col>
                    <Col xs="2" style={{fontSize:"30px", textAlign:"right", fontFamily:"cursive"}}><p>Ansu</p></Col>
                    <Col xs="2" style={{textAlign:"left"}}><h1>Fati</h1></Col>
                </Row>
                <Row>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/13/f90227fc-4cca-4245-8d96-d1c14f5dcc9a/11-Raphinha-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/13/6d27c014-fc2f-4f1b-a2da-9ffcdb27def1/18-Pau_Victor-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/13/c73a4770-0bf1-452f-9ebd-b0f8c33412a0/19-Lamine-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>  
                </Row>
                <Row>
                    <Col xs="1" style={{fontSize:"30px", textAlign:"right", fontFamily:"cursive"}}><p></p></Col>
                    <Col xs="3" style={{textAlign:"left"}}><h1>Raphina</h1></Col>
                    <Col xs="2" style={{fontSize:"30px", textAlign:"right", fontFamily:"cursive"}}><p>Pau</p></Col>
                    <Col xs="2" style={{textAlign:"left"}}><h1>Victor</h1></Col>
                    <Col xs="1" style={{fontSize:"30px", textAlign:"right", fontFamily:"cursive"}}><p></p></Col>
                    <Col xs="3" style={{textAlign:"left"}}><h1>Lamine Yamal</h1></Col>
                </Row>
                <Row style={{padding:"20px",backgroundColor:"midnightblue",margin:"10px"}}>
                    <Col><h1 style={{color:"white"}}>Entrenador</h1></Col>
                </Row>
                <Row>
                    <Col xs="4"></Col>
                    <Col xs="4"><img src="https://www.fcbarcelona.com/photo-resources/2024/10/13/242919cd-91d1-4ad9-9f7e-3c9d26cdd4d7/00-Hansi_Flick-M.jpg?width=470&height=470" alt="" width="100%" height="100%" /></Col>
                </Row>
                <Row>
                    <Col xs="2"></Col>
                    <Col xs="2"></Col>
                    <Col xs="4" style={{textAlign:"center"}}><h1>Hansi Flick</h1></Col>
                </Row>
            </Container>
        </div>
    );
}