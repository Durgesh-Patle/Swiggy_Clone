import React, { useContext } from 'react';
import Context from '../../Context';

const Carts = () => {
    let { cartData,setCartData } = useContext(Context);

    function removeCart(index) {
        setCartData((prev) => prev.filter((_, i) => i !== index));
    }

    return (
        <div className="w-full m-auto mt-28">
            {cartData && cartData.length > 0 ? (
                <>
                    <h1 className="text-4xl font-extrabold text-center mb-8">Your Cart</h1>
                    <div className="max-w-4xl m-auto">
                        {cartData.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between bg-white shadow-lg rounded-lg p-4 mb-4"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-20 object-cover rounded-lg"
                                />
                                <div className="flex-1 ml-4">
                                    <h2 className="text-xl font-semibold">{item.title}</h2>
                                    <p className="text-gray-600">{item.type}</p>
                                    <p className="text-lg font-bold text-gray-800">Price: ${item.price}</p>
                                </div>
                                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition" onClick={()=>removeCart(index)}>
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <h1 className="text-4xl font-extrabold text-center">
                    Empty Carts.
                </h1>
            )}
        </div>
    );
};

export default Carts;
