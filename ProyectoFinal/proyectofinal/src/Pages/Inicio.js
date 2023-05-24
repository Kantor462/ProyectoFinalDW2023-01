// import { Carrusel} from '../Componentes/Carrusel';
import './Inicio.css'

export const Inicio =() =>{
    return(
        <div className='Inicio'>
            {/* <Carrusel/> */}

            <section>
            <h2>Bienvenido a nuestra carpintería</h2>
            <p>¡Ofrecemos servicios de carpintería personalizados para tus necesidades!</p>
            <p>Explora nuestra galería de proyectos para inspirarte.</p>
        </section>

        <section>
            <h2>Nuestros Servicios</h2>
            <ul>
                <li>Fabricación de muebles a medida</li>
                <li>Restauración de muebles antiguos</li>
                <li>Instalación de pisos de madera</li>
                <li>Diseño y construcción de armarios empotrados</li>
            </ul>
        </section>

        </div>
        
    )
}