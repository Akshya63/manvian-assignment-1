
import './App.css';
import ProductCard from './components/ProductCard';
const App = () => {
  const product1 = {
    name: 'Puma Ignite Mesh Mens Running Shoes',
    description: 'Bank OfferFlat ₹500 off on HDFC Bank Credit Card EMI Txns,.',
    price: 1299.09,
    Size: '7 8 9 10',
    image: 'https://th.bing.com/th/id/OIP.K8eRNSJW2_QPJN1JvVMU6QAAAA?w=164&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  };
  const product2 = {
    name: 'Nike Running shoes Men',
    description: 'Bank OfferFlat ₹750 off on HDFC Bank Credit Card EMI Txns.',
    price: 2999.99,
    Size: '7 8 9 10',
    image: 'https://th.bing.com/th/id/OIP.Fe4qZfZ1KwwDirwGsumOeQAAAA?rs=1&pid=ImgDetMain',
  };
  const product3 = {
    name: 'Adidas Imba M Running Shoes For Men',
    description: 'Bank Offer10% off up to ₹1000 on HDFC Bank Credit Card EMI Txns.',
    price: 3999.99,
    Size: '7 8 9 10',
    image: 'https://rukminim1.flixcart.com/image/1408/1408/shoe/9/h/z/blubea-metsil-ntnavy-blac-imba-m-adidas-8-original-imae2zjquyuujvs4.jpeg?q=90',
  };
  const product4 = {
    name: 'FILA - Mens Fila MB Basketball Shoe Blac',
    description: 'Bank OfferFlat ₹750 off on HDFC Bank Credit Card EMI Txns.',
    price: 1999.99,
    Size: '7 8 9 10',
    image: 'https://i5.walmartimages.com/asr/20fe96ea-60e2-49ef-8a51-f73412b24db1.d9c7dfc97dd3c51ea4227b5ba3d5dff5.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  };

  return (
    <div className="d-flex justify-content-center mt-5 bg-secondary">
      <ProductCard product={product1} />
      <ProductCard product={product2} />
      <ProductCard product={product3} />
      <ProductCard product={product4} />
    </div>
  );
};

export default App;
