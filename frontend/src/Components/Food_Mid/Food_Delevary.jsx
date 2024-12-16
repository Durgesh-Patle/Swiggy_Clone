import React, { useContext } from 'react'
import { MdStars } from 'react-icons/md';
// import { useNavigate } from 'react-router-dom';
import Filter_Card from './Filter_Card';
import Context from '../../Context';
import { useNavigate } from 'react-router-dom';

const Food_Dvalvary = () => {
    const { recipiesData } = useContext(Context);
    // console.log(recipiesData);

    let navigate = useNavigate();

    function DelivaryData(id) {
        navigate(`/cart/${id}`);
    }

    return (
        <div className='max-w-[1200px] mx-auto px-3 mt-10'>
            <div className='flex items-center justify-between mb-5'>
                <h2 className='text-2xl font-bold'>Restaurants with online food delivery in Jabalpur
                </h2>
            </div>

            <Filter_Card />

            <div className='flex gap-6 flex-wrap mt-10 mb-10'>
                {
                    recipiesData.map((val, id) => (
                        <div key={id} className='flex flex-col  w-[275px] shrink-0 duration-500 cursor-pointer'
                            onClick={() => DelivaryData(id)}
                        >
                            <div className='overlay h-[185px] w-[273px] rounded-xl overflow-hidden relative '>
                                <img className=' h-full w-full object-cover duration-500 hover:scale-110' src={val.image} alt={val.name} />
                                <p className='z-999 absolute bottom-2 text-2xl font-bold text-white ml-2'>{val.name}</p>
                            </div>

                            <h1 className='font-bold text-xl text-black mt-5'>{val.title}</h1>

                            <div className='flex items-center gap-2'>
                                <MdStars className='text-green-700 text-xl ' />
                                <p className='font-semibold text-gray-700'>{val.time}</p>
                            </div>

                            <h1 className='text-gray-700 font-semibold'>{val.type}</h1>
                        </div>
                    ))
                }
            </div>


            <hr className='bg-gray-300 p-[.5px] my-20 ' />

        </div >
    )
}

export default Food_Dvalvary