import CardProduct from '../components/CardProduct';
import Hero from '../components/Hero';

const products = [
  { id: 1, title: 'Product 1', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dwcad22e7a/images/productsetmydiseno/large/productsetmydiseno_x1.jpg?sw=2200&sh=2500', },
  { id: 2, title: 'Product 2', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw7572ea6c/images/39458619/large/39458619_x1.jpg?sw=2200&sh=2500', },
  { id: 3, title: 'Product 3', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dwe07b9b67/images/39458609/large/39458609_x1.jpg?sw=686&sh=785', },
  { id: 4, title: 'Product 4', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw13d558ae/images/39458614/large/39458614_x1.jpg?sw=686&sh=785', },
  { id: 5, title: 'Product 5', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dwc2e6e2cd/images/42395701/large/42395701_x2.jpg?sw=400&sh=455', },
  { id: 6, title: 'Product 6', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw80fcf4ae/images/42471379/large/42471379_x2.jpg?sw=400&sh=455', },
  { id: 7, title: 'Product 7', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw325b3204/images/42454588/large/42454588_x2.jpg?sw=400&sh=455', },
  { id: 8, title: 'Product 8', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw6a0c9d16/images/38269944/large/38269944_x2.jpg?sw=400&sh=455', },
  { id: 9, title: 'Product 9', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw186e3c9e/images/42395695/large/42395695_x2.jpg?sw=400&sh=455', },
];

const HomePage = () => {
  return (
    <main className="flex-shrink-0 ">
      <div className="container mt-4">
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
