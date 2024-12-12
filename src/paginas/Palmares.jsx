import { Col, Container, Row } from "reactstrap";
import Card from "../MyComponent/Card";

export default function Palmares(){
    return(
        <div className="contenedor">
            <Container>
                <Row>
                    <h1 style={{textAlign:"center"}}><strong>Palmares</strong></h1>
                </Row>
                <Row>
                    <Col xs="4"></Col>
                    <Col xs="4">
                        <p style={{textAlign:"center",fontFamily:"fantasy"}}>Las vitrinas del museo barcelonista acogen todos los trofeos posibles, encabezados por las Copas de Europa conseguidas en las finales de Wembley (1992 y 2011), París (2006), Roma (2009), Berlín (2015) y el Mundial de Clubes de Abu Dhabi y Japón (2009, 2011 y 2015)</p>
                    </Col>
                    <Col xs="4"></Col>
                </Row>
                <Row style={{padding:"5px",margin:"10px"}}>
                    <Col>
                        <img src="https://www.fcbarcelona.com/photo-resources/2023/05/20/fd8f3ab0-de0a-46f3-b458-889c4678adcf/2022-05-20_FCBvsREIALSOCIETAT_139.JPG?width=1600&height=700" alt="" width="100%" height="100%" />
                    </Col>
                </Row>
                <Row style={{padding:"5px"}}>
                    <Col xs="4" style={{maxWidth:"100%", alignContent:"center"}}><Card titulo="Copa de Europa - 5" anios="1991-92, 2005-06, 2008-09, 2010-11, 2014-15" urlImagen="https://www.fcbarcelona.com/fcbarcelona/photo/2018/08/20/59ea52bd-1c5f-4988-95f7-b1ecc64916d4/Champions-League.png"></Card></Col>
                    <Col xs="4" style={{maxWidth:"100%", alignContent:"center"}}><Card titulo="Mundial de Clubes - 3" anios="2009-10, 2011-12, 2015-16" urlImagen="https://www.fcbarcelona.com/fcbarcelona/photo/2018/08/20/3a2e8c01-9bc0-4337-9435-a85019fcbc35/Fifa-Club-World-Cup.png"></Card></Col>
                    <Col xs="4" style={{maxWidth:"100%", alignContent:"center"}}><Card titulo="Recopa de Europa - 4" anios="1978-79, 1981-82, 1988-89, 1996-97" urlImagen="https://www.fcbarcelona.com/fcbarcelona/photo/2018/10/17/1dc08c65-6d38-4d63-b0c5-fe73aafccf33/Recopa-d-Europa.jpg"></Card></Col>
                </Row>
                <Row style={{padding:"5px"}}>
                    <Col xs="4" style={{maxWidth:"100%", alignContent:"center"}}><Card titulo="Copa de Ferias - 3" anios="1957-58, 1959-60, 1965-66" urlImagen="https://www.fcbarcelona.com/fcbarcelona/photo/2018/10/17/c42ca9a8-73d4-4704-82ec-b211a592f5bd/Copa-de-Fires.jpg"></Card></Col>
                    <Col xs="4" style={{maxWidth:"100%", alignContent:"center"}}><Card titulo="Supercopa de Ferias - 1" anios="1971-72" urlImagen="https://www.fcbarcelona.com/fcbarcelona/photo/2018/10/17/c42ca9a8-73d4-4704-82ec-b211a592f5bd/Copa-de-Fires.jpg"></Card></Col>
                    <Col xs="4" style={{maxWidth:"100%", alignContent:"center"}}><Card titulo="Supercopa de Europa - 5" anios="1992-93, 1997-98, 2009-10, 2011-12, 2015-16" urlImagen="https://www.fcbarcelona.com/fcbarcelona/photo/2018/08/20/5a28f51b-1f2a-4ec1-8475-02ae650a4e13/European-Super-Cup.png"></Card></Col>
                </Row>
                <Row style={{padding:"5px"}}>
                    <Col xs="4" style={{maxWidth:"100%", alignContent:"center"}}><Card titulo="Copa Latina - 2" anios="1948-49, 1951-52" urlImagen="https://www.fcbarcelona.com/fcbarcelona/photo/2018/10/17/93c22f21-e51d-43c6-80c1-39a2ea5c85a4/Copa-Llatina.jpg"></Card></Col>
                    <Col xs="4" style={{maxWidth:"100%", alignContent:"center"}}><Card titulo="Copa de los Pirineos - 4" anios="1909-10, 1910-11, 1911-12, 1912-13" urlImagen="https://www.fcbarcelona.com/fcbarcelona/photo/2018/10/17/93c22f21-e51d-43c6-80c1-39a2ea5c85a4/Copa-Llatina.jpg"></Card></Col>
                    <Col xs="4" style={{maxWidth:"100%", alignContent:"center"}}><Card titulo="Liga - 27" anios="1928-29, 1944-45, 1947-48, 1948-49, 1951-52, 1952-53, 1958-59, 1959-60, 1973-74, 1984-85, 1990-91, 1991-92, 1992-93, 1993-94, 1997-98, 1998-99, 2004-05, 2005-06, 2008-09, 2009-10, 2010-11, 2012-13, 2014-15, 2015-16, 2017-18, 2018-19, 2022-23" urlImagen="https://www.fcbarcelona.com/fcbarcelona/photo/2018/08/20/119a9766-0db7-4fe1-9f8a-f9fb9dca0ca3/la-liga.png"></Card></Col>
                </Row>
                <Row style={{padding:"5px"}}>
                    <Col xs="4" style={{maxWidth:"100%", alignContent:"center"}}><Card titulo="Copa del Rey - 31" anios="1909-10, 1911-12, 1912-13, 1919-20, 1921-22, 1924-25, 1925-26, 1927-28, 1941-42, 1950-51, 1951-52, 1952-53, 1956-57, 1958-59, 1962-63, 1967-68, 1970-71, 1977-78, 1980-81, 1982-83, 1987-88, 1989-90, 1996-97, 1997-98, 2008-09, 2011-12, 2014-15, 2015-16, 2016-17, 2017-18, 2020-21" urlImagen="https://www.fcbarcelona.com/fcbarcelona/photo/2018/08/20/07e7774e-cf87-49b4-b2ce-f56d62967bce/Spanish-Cup.png"></Card></Col>
                    <Col xs="4" style={{maxWidth:"100%", alignContent:"center"}}><Card titulo="Supercopa de España - 14" anios="1983-84, 1991-92, 1992-93, 1994-95, 1996-97, 2005-06, 2006-07, 2009-10, 2010-11, 2011-12, 2013-14, 2016-17, 2018-19, 2022-23" urlImagen="https://www.fcbarcelona.com/fcbarcelona/photo/2018/10/17/7db0228d-5e88-465b-82db-61654d4bbd4d/Supercopa-Espanya.jpg"></Card></Col>
                    <Col xs="4" style={{maxWidth:"100%", alignContent:"center"}}><Card titulo="Copa de la Liga - 2" anios="1982-83, 1985-86" urlImagen="https://www.fcbarcelona.com/fcbarcelona/photo/2018/10/17/617cf9b9-1477-4bcf-af1e-b2428238240a/Copa-de-la-Lliga.jpg"></Card></Col>
                </Row>
            </Container>
        </div>
    );
}