import React from 'react';
import imagenes from '../Assets/imagenes';


const products = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Descripción del producto 1',
    image: 'imagenes.img11'
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Descripción del producto 2',
    image: 'imagen2.jpg'
  },
  {
    id: 3,
    name: 'Producto 3',
    description: 'Descripción del producto 3',
    image: 'imagen3.jpg'
  }
];

 export const Trabajos = () => {
  return (
    <div>
        <div>Productos/Trabajos aqui</div>
      <h1>Galería de Productos</h1>
      {/* <div className="product-gallery">
        {products.map(product => (
          <div className="product" key={product.id}>
            <img src={require(`./${product.image}`).default} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div> */}
      </div>

  );
};


