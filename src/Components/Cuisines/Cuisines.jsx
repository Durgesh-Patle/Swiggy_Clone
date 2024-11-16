import React, { useContext } from 'react';
import Context from '../../Context';

const Cuisines = () => {
    const { LocateData } = useContext(Context);

    // Render Block for Cards
    const renderCards = (data) => {
        return data.map(({ city }, index) => (
            <div
                key={index}
                className='border border-[#888] w-[280px] py-4 flex items-center justify-center rounded-[6px] mt-5 cursor-pointer mb-3'
            >
                <p className='font-semibold text-[#333] text-[12px]'>{city}</p>
            </div>
        ));
    };

    return (
        <div className='max-w-[1200px] mx-auto'>
            {/* Section 1: Best Places to Eat */}
            <h1 className='text-[#222] font-bold text-[24px] my-5'>Best Places to Eat Across Cities</h1>
            <div className='flex gap-4 gap-y-0 flex-wrap'>
                {LocateData && LocateData.length > 0 ? (
                    renderCards(LocateData)
                ) : (
                    <h3 className='text-[#888]'>No data available</h3>
                )}
            </div>

            {/* Section 2: Best Cuisines */}
            <h1 className='text-[#222] font-bold text-[24px] my-5 mt-12'>Best Cuisines Near Me!</h1>
            <div className='flex gap-4 gap-y-0 flex-wrap'>
                {LocateData && LocateData.length > 0 ? (
                    renderCards(LocateData)
                ) : (
                    <h3 className='text-[#888]'>No data available</h3>
                )}
            </div>
        </div>
    );
};

export default Cuisines;
