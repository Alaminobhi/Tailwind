import React from 'react';

const Product = ({product, handleAddProduct}) => {
    const { img, name, seller, price, stock} = product;
    return (
        <div class="max-w-md m-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img class="h-48 w-full object-cover md:w-48" src={img} alt="Man looking at item at a store"/>
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-black-500 font-semibold">{name}</div>
            <p class="mt-2 text-gray-500">Stock Product: {stock}</p>
            <p class="mt-2 text-gray-500">Price: {price}</p>
            <button class="block mt-1 text-lg leading-tight font-medium text-black hover:underline" onClick ={()=>handleAddProduct(product)}>Add to Shop</button>
          </div>
        </div>
      </div>
    );
};

export default Product;