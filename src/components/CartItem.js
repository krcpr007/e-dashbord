import React from 'react';

function CartItem({name , price, company, catogory}) {
    const imgURL ="https://images.unsplash.com/photo-1617785899222-fe06b15b6dd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80";
    return (
            <div className="flex justify-between items-center mt-6 pt-6 border-t">
                <div className="flex items-center"> <img src={imgURL}  className="w-1/3 shadow"/>
                    <div className="flex flex-col ml-3"> 
                        <span className="md:text-md font-medium">Chicken momo</span>
                        <span className="text-xs font-light text-gray-400">#41551</span> 
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="pr-8 flex "> 
                        <button><span className="font-semibold">-</span> </button>
                        <input type="text" className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="1"/>
                        <button><span className="font-semibold">+</span></button> 
                    </div>
                    <div className="pr-8 "> 
                        <span className="text-xs font-medium">$10.50</span> 
                    </div>
                    <div> 
                        <i className="fa fa-close text-xs font-medium"></i> 
                    </div>
                </div>
            </div>
    )}; 

export default CartItem;
