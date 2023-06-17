import CardProduct from "../components/CardProduct";
const tables = [
  { id: 1, title: 'Product 1', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw857ad6c1/images/productsetmydiseno/large/productsetmydiseno_x2.jpg?sw=400&sh=455', },
  { id: 2, title: 'Product 2', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dwaeb02603/images/productsetmobital/large/productsetmobital_x2.jpg?sw=400&sh=455', },
  { id: 3, title: 'Product 3', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw457fd39f/images/productsetdixy1/large/productsetdixy1_x2.jpg?sw=400&sh=455', },
  { id: 4, title: 'Product 4', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dwb20d35e5/images/productsetpalaciodehierro1/large/productsetpalaciodehierro1_x2.jpg?sw=400&sh=455', },
  { id: 5, title: 'Product 5', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw1bb0b099/images/42579034/large/42579034_x2.jpg?sw=400&sh=455', },
  { id: 6, title: 'Product 6', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw835f3942/images/productsetdeltoro1/large/productsetdeltoro1_x2.jpg?sw=400&sh=455', },];
const beds = [
  { id: 1, title: 'Product 1', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw0c8e1e91/images/42737458/large/42737458_x2.jpg?sw=400&sh=455', },
  { id: 2, title: 'Product 2', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw29e5d93d/images/bundlespringair4/large/bundlespringair4_x1.jpg?sw=400&sh=455', },
  { id: 3, title: 'Product 3', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw578b69ab/images/42744384/large/42744384_x2.jpg?sw=400&sh=455', },
  { id: 4, title: 'Product 4', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dwe9653904/images/bundlespringair3/large/bundlespringair3_x1.jpg?sw=400&sh=455', },
  { id: 5, title: 'Product 5', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw9474df19/images/40801208/large/40801208_x2.jpg?sw=400&sh=455', },
  { id: 6, title: 'Product 6', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw5676e650/images/43280364/large/43280364_x2.jpg?sw=400&sh=455', },];
  const chairs = [
    { id: 1, title: 'Product 1', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw5a1efc61/images/42962483/large/42962483_x2.jpg?sw=400&sh=455' },
    { id: 2, title: 'Product 2', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw2327aa1a/images/41375240/large/41375240_x2.jpg?sw=400&sh=455' },
    { id: 3, title: 'Product 3', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw671dd9ad/images/42962480/large/42962480_x2.jpg?sw=400&sh=455' },
    { id: 4, title: 'Product 4', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw124fd35c/images/39458614/large/39458614_x2.jpg?sw=400&sh=455' },
    { id: 5, title: 'Product 5', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dwc1ba6a9f/images/42533360/large/42533360_x2.jpg?sw=400&sh=455' },
    { id: 6, title: 'Product 6', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw117941ad/images/41714202/large/41714202_x2.jpg?sw=400&sh=455' }
  ];
  const bookcases = [
    { id: 1, title: 'Product 1', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dwcb903f33/images/setcubeslibrero1/large/setcubeslibrero1_x1.jpg?sw=400&sh=455' },
    { id: 2, title: 'Product 2', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw614c27aa/images/43046329/large/43046329_x1.jpg?sw=400&sh=455' },
    { id: 3, title: 'Product 3', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw3777cddb/images/41736698/large/41736698_x2.jpg?sw=400&sh=455' },
    { id: 4, title: 'Product 4', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dwf9164082/images/41736696/large/41736696_x2.jpg?sw=400&sh=455' },
    { id: 5, title: 'Product 5', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw84a76036/images/42540038/large/42540038_x2.jpg?sw=400&sh=455' },
    { id: 6, title: 'Product 6', description: 'lorem', src: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw6cbdf85f/images/41854147/large/41854147_x2.jpg?sw=400&sh=455' },
  ];
  

const CataloguePage = () => {
  return (
    <>
      <h1>Catálogo</h1>



      <h2>Mesas</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {tables.map((product) => (
          <CardProduct
            key={product.id}
            title={product.title}
            description={product.description}
            src={product.src}
          />
        ))}
      </div>



      <h2>Colchones</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {beds.map((product) => (
          <CardProduct
            key={product.id}
            title={product.title}
            description={product.description}
            src={product.src}
          />
        ))}
      </div>



      <h2>Sillas</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {chairs.map((product) => (
          <CardProduct
            key={product.id}
            title={product.title}
            description={product.description}
            src={product.src}
          />
        ))}
      </div>



      <h2>Estanteria</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {bookcases.map((product) => (
          <CardProduct
            key={product.id}
            title={product.title}
            description={product.description}
            src={product.src}
          />
        ))}
      </div>



        
    </>
  );
};

export default CataloguePage;
