import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Context from '../../Context';

const OneCard = () => {
    let { id } = useParams();
    //    console.log(id);

    let { recipiesData } = useContext(Context);
    let newData = recipiesData.filter((val, ind) => ind.toString() === id)

    return (
        <div className="mt-28 flex items-center justify-center">
            {
                newData.map((val) => {
                    return (
                        <div className="bg-white shadow-lg rounded-lg p-6 max-w-400 text-center">
                            <h1 className="text-4xl font-extrabold text-gray-800 mb-4 text-left">{val.title}</h1>
                            <div className="mt-5 overflow-hidden">
                                <img
                                    className="ml-2 w-[450px] h-64 object-cover rounded duration-500  hover:scale-105"
                                    src={val.image}
                                    alt={val.title}
                                />
                            </div>
                            <p className='mt-2'>Explore a world of flavors food, where every meal brings a taste of diverse cuisines to your table. From comforting classics to exotic dishes, we cater to every craving and occasion!</p>

                            <h2 className="text-lg font-medium text-gray-700 mt-2">{val.type}</h2>

                            <div className="mt-4">
                                <p className="text-xl font-bold text-gray-800">Price ${val.price}</p>
                                <button className="mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-500 transition duration-300 mx-4">
                                    Buy Now
                                </button>
                                <button className="mt-4 px-6 py-2 bg-[#f1686d] text-white font-semibold rounded hover:bg-[#E73237] transition duration-300">
                                    Add To Card
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default OneCard
