import CardProduct from '../components/CardProduct';
import Hero from '../components/Hero';

const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'lorem',
    src: 'https://cubomuebles.com.mx/412-large_default/silla-infantil-reforzadas-cu-sk02b.jpg',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'lorem',
    src: 'https://cubomuebles.com.mx/412-large_default/silla-infantil-reforzadas-cu-sk02b.jpg',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'lorem',
    src: 'https://cubomuebles.com.mx/412-large_default/silla-infantil-reforzadas-cu-sk02b.jpg',
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'lorem',
    src: 'https://cubomuebles.com.mx/412-large_default/silla-infantil-reforzadas-cu-sk02b.jpg',
  },
  {
    id: 5,
    title: 'Product 4',
    description: 'lorem',
    src: 'https://cubomuebles.com.mx/412-large_default/silla-infantil-reforzadas-cu-sk02b.jpg',
  },
  {
    id: 6,
    title: 'Product 4',
    description: 'lorem',
    src: 'https://cubomuebles.com.mx/412-large_default/silla-infantil-reforzadas-cu-sk02b.jpg',
  },
  {
    id: 7,
    title: 'Product 4',
    description: 'lorem',
    src: 'https://cubomuebles.com.mx/412-large_default/silla-infantil-reforzadas-cu-sk02b.jpg',
  },
];

const HomePage = () => {
  return (
    <main className="flex-shrink-0">
      <div className="container">
        <div className="row bg-light shadow rounded mb-5">
          <Hero />
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
          {products.map((product) => (
            <CardProduct
              key={product.id}
              title={product.title}
              description={product.description}
              src={product.src}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
