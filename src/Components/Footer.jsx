import { Link } from 'react-router';
import './Footer.css'
export default function(){
    return(
        <footer className="footer-barca">
            <div className="footer-contenido">
                <div className="footer-seccion">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/800px-FC_Barcelona_%28crest%29.svg.png" 
                        alt="Logo del FC Barcelona" 
                        className="footer-logo"
                    />
                    <p className="footer-descripcion">
                        Más que un club. Unidos por la pasión, la historia y el espíritu competitivo. Visítanos y sé parte de nuestra familia.
                    </p>
                </div>

                
                <div className="footer-seccion">
                    <h3>Enlaces Útiles</h3>
                    <ul className="footer-enlaces">
                        <li><Link to="/inicio">El Club</Link></li>
                        <li><Link to="/historia">Historia</Link></li>
                        <li><Link to="/plantilla">El Equipo</Link></li>
                        <li><Link to="/trofeos">Trofeos</Link></li>
                    </ul>
                </div>

                <div className="footer-seccion">
                    <h3>Síguenos</h3>
                    <div className="footer-redes">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733646.png" alt="YouTube" />
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    );
}