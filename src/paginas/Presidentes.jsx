import { Button, ButtonGroup, Col, Container, Row } from "reactstrap";
import CarruselP from "../Components/CarruselP";
import NavbarHistoria from "../Components/NavbarHistoria/NavbarHistoria";


const items1 = [
    {
      src: 'https://www.fcbarcelona.com/photo-resources/2021/03/07/7740f984-e2f9-4a01-a430-5682582f64b1/mini__AC41645.jpg?width=640&height=400',
      altText: 'Joan Laporta',
      caption: 'Joan Laporta',
      key: 1,
    },
    {
      src: 'https://www.fcbarcelona.com/photo-resources/2021/03/17/b8a97b18-b6c8-47fb-a327-072271c2a7b9/RetratsComissiGestora2020_1_pic__gpf6173.jpg?width=640&height=400',
      altText: 'Slide 2',
      caption: 'Comision Gestora',
      key: 2,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/09/26/1efcd35c-ef81-448e-9747-ee1b811d0ea3/Josep-Maria-Bartomeu.jpg',
      altText: 'Slide 3',
      caption: 'Josep Maria Bartomeu',
      key: 3,
    },
    {
      src: 'https://www.fcbarcelona.com/photo-resources/2020/11/27/2fdeb123-a872-4b62-b376-9d4b65ec92dd/RAMON-ADELL.jpg?width=640&height=400',
      altText: 'Slide 1',
      caption: 'Comision Gestora',
      key: 1,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/6389fb44-378f-440a-aee0-60af57370629/2722815.jpg',
      altText: 'Slide 2',
      caption: 'Sandro Rosell',
      key: 2,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/382b6601-808d-4275-9ed6-c7b22d4864eb/2722841.jpg',
      altText: 'Slide 3',
      caption: 'Joan Laporta',
      key: 3,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/b9ba26ad-3aa1-49d1-9703-6f9ad666b019/19367111.jpg',
      altText: 'Slide 2',
      caption: 'Comision Gestora',
      key: 2,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/8acc14ee-f3e4-444b-b4c3-594541a5c3db/2923747.jpg',
      altText: 'Slide 3',
      caption: 'Comision Gestora',
      key: 3,
    },
];

const items2 = [
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/b34ce62a-80a1-4d97-bf1d-c8512d8dc121/2722867.jpg',
      altText: 'Slide 1',
      caption: 'Enric Reyna',
      key: 1,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/6eee9e4d-a05a-4b0d-a4e6-7d7e5bdf96c2/2722893.jpg',
      altText: 'Slide 2',
      caption: 'Joan Gaspart',
      key: 2,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/2901fd2c-6c32-4631-b3e9-cf24e05b1dbd/2722919.jpg',
      altText: 'Slide 3',
      caption: 'Josep Lluis Nuñez',
      key: 3,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/7f3a49cc-23be-4bf2-9aa7-ceacb26107dd/2722939.jpg',
      altText: 'Slide 1',
      caption: 'Raimon Carrasco',
      key: 1,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/967254c3-4e0e-4824-bd61-1c3867887040/2722965.jpg',
      altText: 'Slide 2',
      caption: 'Agusti Montal',
      key: 2,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/3307298f-e071-4dca-a867-cf8e63c49f0c/2722984.jpg',
      altText: 'Slide 3',
      caption: 'Narcis de Carreras',
      key: 3,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/43545007-affa-4d73-b834-12e35f1b03e2/2723010.jpg',
      altText: 'Slide 2',
      caption: 'Enric Llaudet',
      key: 2,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/5a1d12b9-c778-4e1c-9122-2ec0086ee369/2923760.jpg',
      altText: 'Slide 3',
      caption: 'Antoni Julia',
      key: 3,
    },
];
const items3 = [
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/1a9d1937-4e4d-4ccd-8dbf-01f05b6effbe/2723036.jpg',
      altText: 'Slide 1',
      caption: 'Francesc Miro-Sans',
      key: 1,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/f77a742a-fa62-43cc-882c-e3d2156adbc9/2723067.jpg',
      altText: 'Slide 2',
      caption: 'Enric Marti',
      key: 2,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/58dd937c-26ae-4d49-85cb-e0bfd9b3ce64/2723088.jpg',
      altText: 'Slide 3',
      caption: 'Agusti Montal',
      key: 3,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/abf0c810-19e2-4a7c-81e6-0b302f63a2e1/2723114.jpg',
      altText: 'Slide 1',
      caption: 'Josep Vendrell',
      key: 1,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/2bced8d8-2fc8-498c-983b-00646e348ebd/2723140.jpg',
      altText: 'Slide 2',
      caption: 'Josep Antoni',
      key: 2,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/541efc66-3f87-43c8-98c0-c82ed15a3882/2723166.jpg',
      altText: 'Slide 3',
      caption: 'Josep Vidal-Ribas',
      key: 3,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/aab47de2-f783-47ca-a62f-89bb51149310/2723192.jpg',
      altText: 'Slide 2',
      caption: 'Enrique Piñeyro',
      key: 2,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/329161b7-2cf3-4e4d-ae7d-bae07e0ca8f5/2723738.jpg',
      altText: 'Slide 3',
      caption: 'Joan Soler',
      key: 3,
    },
];

const items4 = [
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/d41fb3a6-b68e-4320-9142-af20243edc29/3652205.jpg',
      altText: 'Slide 1',
      caption: 'Francesc Havier',
      key: 1,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/eaf6e6bb-2bfc-44db-bce9-6f50b0a0754f/2699101.png',
      altText: 'Slide 2',
      caption: 'Comite de Empleados',
      key: 2,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/0b3e82f5-d27b-4d08-9f95-2b59e669ba9a/2723222.jpg',
      altText: 'Slide 3',
      caption: 'Josep Suñol',
      key: 3,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/0e305ece-ed23-4665-87e4-51ead77fd816/2723244.jpg',
      altText: 'Slide 1',
      caption: 'Esteve Sala',
      key: 1,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/f09fe061-8649-490f-ad29-84583c574ef1/2723270.jpg',
      altText: 'Slide 2',
      caption: 'Joan Coma',
      key: 2,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/7d505af7-6387-45fa-8e41-bed2225c57cc/2723296.jpg',
      altText: 'Slide 3',
      caption: 'Antoni Oliver',
      key: 3,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/ddb2b62d-75fd-40a9-bd33-fcc59eb66d89/2723322.jpg',
      altText: 'Slide 2',
      caption: 'Tomas Roses',
      key: 2,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/62c16eec-c800-42e3-995b-65dd5b6f8279/2723348.jpg',
      altText: 'Slide 3',
      caption: 'Arcadi Balaguer',
      key: 3,
    },
];
const items5 = [
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/2d834438-b4ad-4b23-b8f6-ac8be62ee351/2723374.jpg',
      altText: 'Slide 1',
      caption: 'Enric Cardona',
      key: 1,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/d21c0602-58b4-4eb9-8875-b0dd7561e52c/3647082.jpg',
      altText: 'Slide 2',
      caption: 'Ricard Graells',
      key: 2,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/4bd8e530-f6c6-44b8-9494-bfe10a567aa0/2723417.jpg',
      altText: 'Slide 3',
      caption: 'Gaspar Roses',
      key: 3,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/f7a1d222-dd04-4f09-9a81-b2c95e44d2de/2723446.jpg',
      altText: 'Slide 1',
      caption: 'Rafael Llopart',
      key: 1,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/c681c3a4-9b7c-4bfe-a017-7f4ac8fa6244/2723472.jpg',
      altText: 'Slide 2',
      caption: 'Joaquim Peris de Vargas',
      key: 2,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/cce1067c-dd64-44d8-920e-c8e22192f43d/3647134-1-.jpg',
      altText: 'Slide 3',
      caption: 'Alvar Presta',
      key: 3,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/5e99251a-e8b4-4d92-a4de-eec6ee8f86c3/2723517.jpg',
      altText: 'Slide 2',
      caption: 'Francesc de Moxo',
      key: 2,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/dca2b2f0-f36f-4ab7-abf6-d9f6dc1916a6/2723543.jpg',
      altText: 'Slide 3',
      caption: 'Otto Gmelin',
      key: 3,
    },
];

const items6 = [
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/cce1067c-dd64-44d8-920e-c8e22192f43d/3647134-1-.jpg',
      altText: 'Slide 1',
      caption: 'Alvar Presta',
      key: 1,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/5e99251a-e8b4-4d92-a4de-eec6ee8f86c3/2723517.jpg',
      altText: 'Slide 2',
      caption: 'Francesc de Moxo',
      key: 2,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/dca2b2f0-f36f-4ab7-abf6-d9f6dc1916a6/2723543.jpg',
      altText: 'Slide 3',
      caption: 'Otto Gmelin',
      key: 3,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/8b0cdb77-78bf-49ae-918f-82c3002dd130/2723569.jpg',
      altText: 'Slide 1',
      caption: 'Joan Gamper',
      key: 1,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/26d585e8-15a1-4d9b-b8f1-e63a403082de/2723589.jpg',
      altText: 'Slide 2',
      caption: 'Vicenc Reig',
      key: 2,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/464ba392-15ba-4e8c-9122-36a4eff787f2/2723613.jpg',
      altText: 'Slide 3',
      caption: 'Juli Marial',
      key: 3,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/3503bcf2-81fe-4e80-9d0e-b7ec68d0631a/16975513.jpg',
      altText: 'Slide 2',
      caption: 'Josep Soler',
      key: 2,
    },
    {
      src: 'https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/16/7d63898f-d3d9-4c8c-8057-ad4481c644ce/2723634.jpg',
      altText: 'Slide 3',
      caption: 'Arthur Witty',
      key: 3,
    },
];

export default function Presidentes(){
    return(
        <div>
            <Container>
                <Row>
                    <Col xs="12">
                      <NavbarHistoria />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12"><h1>Presidentes</h1></Col>
                </Row>
                <Row style={{marginTop:"15px",marginEnd:"10px"}}>
                    <Col xs="6">
                        <CarruselP items={items1}/>
                    </Col>
                    <Col xs="6">
                        <CarruselP items={items2}/>
                    </Col>
                </Row>
                <Row style={{marginTop:"15px",marginEnd:"10px"}}>
                    <Col xs="6">
                        <CarruselP items={items3}/>
                    </Col>
                    <Col xs="6">
                        <CarruselP items={items4}/>
                    </Col>
                </Row>
                <Row style={{marginTop:"15px",marginEnd:"10px"}}>
                    <Col xs="6">
                        <CarruselP items={items5}/>
                    </Col>
                    <Col xs="6">
                        <CarruselP items={items6}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}