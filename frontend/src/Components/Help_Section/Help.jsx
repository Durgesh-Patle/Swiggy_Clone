import React from "react";

const Help = () => {
    const helpData = [
        {
            sum: 'I want to partner my restaurant with Swiggy',
            para: 'Partner with us',
        },
        {
            sum: 'I want to opt-out from Google reserve',
            para: '',
        },
        {
            sum: 'After I submit all documents, how long will it take for my restaurant to go live on Swiggy?',
            para: 'After all mandatory documents have been received and verified, it takes up to 7-10 working days for the onboarding to be completed and make your restaurant live on the platform.',
        },
        {
            sum: 'What is this one-time Onboarding fee? Do I have to pay for it while registering?',
            para: 'This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. It is deducted from the weekly payouts after you start receiving orders from Swiggy.',
        },
        {
            sum: 'Who should I contact if I need help & support in getting onboarded?',
            para: 'You can connect with Partner Support on 080-67466777/68179777 or write to partnersupport@swiggy.in',
        },
        {
            sum: 'What are the mandatory documents needed to list my restaurant on Swiggy?',
            para: '- Copies of the below documents are mandatory: FSSAI Licence OR FSSAI Acknowledgement, Pan Card, GSTIN Certificate, Cancelled Cheque OR bank Passbook, Menu.',
        },
        {
            sum: 'How much commission will I be charged by Swiggy?',
            para: 'The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.',
        },
        {
            sum: 'I don’t have an FSSAI licence for my restaurant. Can it still be onboarded?',
            para: 'FSSAI licence is a mandatory requirement according to the government’s policies. However, if you are yet to receive the licence at the time of onboarding, you can proceed with the acknowledgement number which you will have received from FSSAI for your registration.',
        },
    ];

    return (
        <>
            <div className="w-full bg-[#37718E] mt-28 p-8 text-center">
                <h1 className="text-4xl font-extrabold text-white mb-4">Help & Support</h1>
                <p className="text-white text-lg">
                    Let's take a step ahead and help you better.
                </p>
            </div>

            <div className="max-w-4xl mx-auto p-6 space-y-6">
                {helpData.map((item, index) => (
                    <details
                        key={index}
                        className="group border rounded-lg bg-white shadow-md transition hover:shadow-lg"
                    >
                        <summary className="cursor-pointer px-5 py-4 font-semibold text-gray-600 group-open:text-[#FF5200]">
                            {item.sum}
                        </summary>
                        <div className="px-5 py-3 border-t text-gray-700 space-y-3">
                            <p>{item.para}</p>
                            {item.para && (
                                <button className="mt-2 px-5 py-2 bg-[#FF5200] text-white rounded hover:bg-[#e64a00] focus:ring focus:ring-[#FF5200]/50">
                                    Send an Email
                                </button>
                            )}
                        </div>
                    </details>
                ))}
            </div>
        </>
    );
};

export default Help;
