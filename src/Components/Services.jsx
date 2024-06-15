import React from 'react';

const Services = () => {
    const cardData = [
        {
            icon: '/user.png',
            title: 'Cakap Private',
            content: 'Learn foreign language by scheduling your Private Class with your chosen time and teacher',
            bgColor: 'bg',
            iconBg: 'bg-slate-800'
        },
        {
            icon: '/users.png',
            title: 'Cakap Club',
            content: 'Learn foreign language and meet your new friends',
            bgColor: 'bg-white',
            iconBg: 'bg-slate-800'
        },
        {
            icon: '/chat.png',
            title: 'Cakap Chat',
            content: 'Chat with your teacher to practice foreign language everyday',
            bgColor: 'bg-white',
            iconBg: 'bg-slate-800'
        },
        {
            icon: '/videoCall.png',
            title: 'Cakap Upskill',
            content: "Don't miss the chance to join online discussions with experts!",
            bgColor: 'bg-white',
            iconBg: 'bg-slate-800'
        },
    ];
    
    return (
        <div className="relative overflow-hidden bg-[#f0ffff] h-full  ">
           
           
                <svg className='absolute z-0 rotate-90 right-0 translate-x-24 -translate-y-24 ' width='600' height='600' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#f0f8ff', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#87ceeb', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <path fill="url(#gradient)" d="M46,-61.5C60.2,-53.1,72.7,-40.4,71.2,-27.3C69.7,-14.2,54.2,-0.8,49,16.1C43.8,33,48.7,53.5,42.3,67.1C35.8,80.8,17.9,87.6,4.6,81.3C-8.7,74.9,-17.4,55.4,-27.6,43C-37.9,30.6,-49.7,25.3,-57,15.5C-64.2,5.8,-67,-8.5,-63.5,-21.1C-60.1,-33.7,-50.3,-44.8,-38.7,-54.1C-27.1,-63.4,-13.5,-70.9,1.2,-72.5C15.9,-74.2,31.9,-70,46,-61.5Z" transform="translate(100 100)" />
                </svg>
            
   
            <div>
            <div className="flex items-center justify-center mb-4 z-20 overflow-hidden relative">
                <h1 className="text-3xl font-bold z-20">Our Services</h1>
            </div>
            

            <section className=" relative grid lg:grid-cols-2 gap-6 lg:pl-48 lg:pr-48 p-8 lg:w-full">
            
                {cardData.map((card, id) => (
                    <div key={id} className={`card rounded-lg flex w-full h-32 lg:h-40 ${card.bgColor} shadow p-5 z-10`}>
                        <div className="flex items-start justify-start mr-3">
                            <p className={` ${card.iconBg} w-10 h-10 p-1 rounded-xl`}>
                                <img src={card.icon} alt="img" className="w-8 h-8" />
                            </p>
                        </div>
                        <div className="text-left lg:pr-6">
                            <h1 className='font-semibold'>{card.title}</h1>
                            <p className="text-sm mt-2 leading-relaxed"> {card.content}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
        </div>
    );
}

export default Services;
