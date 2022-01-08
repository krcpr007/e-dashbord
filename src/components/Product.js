import React from 'react'

function Product({name, price}) {
    return (
        <a href="/" className="group">
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="w-full h-full object-center object-cover group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-white-700">
          {name}
        </h3>
        <p className="mt-1 text-lg font-medium text-gray-900">
          {price}
        </p>
      </a>
    )
}

export default Product
