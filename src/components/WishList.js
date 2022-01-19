import React from 'react'

function WishList() {
    return (
        // <!-- This example requires Tailwind CSS v2.0+ -->
 <div className="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

    <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
      <div className="w-screen max-w-md">
        <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
          <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
            <div className="flex items-start justify-between">
              <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
                Shopping cart
              </h2>
              <div className="ml-3 h-7 flex items-center">
                <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Close panel</span>
                  {/* <!-- Heroicon name: outline/x --> */}
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  <li className="py-6 flex">
                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                      <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="w-full h-full object-center object-cover"/>
                    </div>

                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href="#">
                              Throwback Hip Bag
                            </a>
                          </h3>
                          <p className="ml-4">
                            $90.00
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          Salmon
                        </p>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <p className="text-gray-500">
                          Qty 1
                        </p>

                        <div className="flex">
                          <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="py-6 flex">
                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                      <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." className="w-full h-full object-center object-cover"/>
                    </div>

                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href="#">
                              Medium Stuff Satchel
                            </a>
                          </h3>
                          <p className="ml-4">
                            $32.00
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          Blue
                        </p>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <p className="text-gray-500">
                          Qty 1
                        </p>

                        <div className="flex">
                          <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* <!-- More products... --> */}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>$262.00</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            <div className="mt-6">
              <a href="#" className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Checkout</a>
            </div>
            <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
              <p>
                or <button type="button" className="text-indigo-600 font-medium hover:text-indigo-500">Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>
 </div>

    )
}

export default WishList
