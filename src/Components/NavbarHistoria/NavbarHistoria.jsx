import { Link } from "react-router";
import { Button, ButtonGroup } from "reactstrap";

export default function NavbarHistoria () {

    return (
        <>
            <ButtonGroup
                className="my-2"
                size="lg"
            >
                <Button className="button-players" outline >
                    <Link to="/historia">Decada a Decada</Link>
                </Button>
                <Button className="button-players" outline >
                    <Link to="/historia/presidentes">Presidentes</Link>
                </Button>
                <Button className="button-players" outline>
                    <Link to="/historia/jugadoreshistoricos">Jugadores Historicos</Link>
                </Button>
            </ButtonGroup>
            <br />
        </>
    )
}