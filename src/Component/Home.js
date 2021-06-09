import React, { useEffect, useState } from 'react';
import Product from './Product';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('')
    const [shop, setShop] = useState([]);
    useEffect(() => {
        fetch('https://immense-bastion-56253.herokuapp.com/products?search='+search)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [search])

    const handleSearch = event => {
        setSearch(event.target.value);
        }

        const handleAddProduct = (product) => {
          const pdAddKey = product.key;
          const sameShop = shop.find(pd => pd.key === pdAddKey);
          let count = 1;
          let newShop;
          if(sameShop){
              count = sameShop.quantity + 1;
              sameShop.quantity = count;
              const others = shop.filter(pd => pd.key !== pdAddKey);
              newShop = [...others, sameShop];
          }
          else{
            product.quantity = 1;
            newShop = [...shop, product];
          }
         setShop(newShop);

        }
    return (
        <div class="xl:overflow-auto">
            {/* <input type="text" onBlur={handleSearch} /> */}
            {
                products.map(pd => <Product 
                    key={pd.key}
                   
                    handleAddProduct = {handleAddProduct}
                    product={pd}
                    ></Product>)
                }
        </div>
    );
};

export default Home;