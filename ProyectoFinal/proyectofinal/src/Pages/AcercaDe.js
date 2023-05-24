import './AcercaDe.css'

export const AcercaDe =() =>{
    return(
        <div>

<title>Acerca de Nosotros</title>
  <header>
    <h1 className='Titulo'>Nuestra Empresa</h1>
  </header>
  
  <nav>
    <ul className="Links">
      <li><a href="/Inicio">Inicio</a></li>
      <li><a href="/Trabajos">Trabajos</a></li>
      <li><a href="/Contacto">Contacto</a></li>
      <li><a href="/AcercaDe">Acerca de</a></li>
    </ul>
  </nav>
  
  <section>
    <h2>Misión</h2>
    <p>Nuestra misión es proporcionar productos de alta calidad y brindar un excelente servicio al cliente.</p>
    <ul>
      <li>
      Contar con los mejores proveedores y materiales
      </li>
      <li>
      Ofrecer la mejor asesoría a nuestros clientes      </li>
      <li>
      Disponer de un equipo humano competitivo, con la formación adecuada y capacitado en cada uno de los procesos de los que forma parte      </li>
      <li>
      Contar con la infraestructura adecuada para el desarrollo de nuestros productos      </li>
    </ul>
  </section>
  
  <section>
    <h2>Visión</h2>
    <p>Nuestra visión es convertirnos en líderes en nuestra industria, innovando constantemente y superando las expectativas de nuestros clientes.</p>
  </section>


        </div>
    )
}
