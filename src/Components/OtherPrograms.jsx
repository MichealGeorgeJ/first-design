import React from 'react'

const OtherPrograms = () => {
  return (
    <div>
        <section className="other-programs">
        
            <svg className=' blob' width='600' height='600' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#f0f8ff', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#87ceeb', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <path fill="url(#gradient)" d="M46,-61.5C60.2,-53.1,72.7,-40.4,71.2,-27.3C69.7,-14.2,54.2,-0.8,49,16.1C43.8,33,48.7,53.5,42.3,67.1C35.8,80.8,17.9,87.6,4.6,81.3C-8.7,74.9,-17.4,55.4,-27.6,43C-37.9,30.6,-49.7,25.3,-57,15.5C-64.2,5.8,-67,-8.5,-63.5,-21.1C-60.1,-33.7,-50.3,-44.8,-38.7,-54.1C-27.1,-63.4,-13.5,-70.9,1.2,-72.5C15.9,-74.2,31.9,-70,46,-61.5Z" transform="translate(100 100)" />
                </svg>
           
           <div className="content">
            <h1 className="h1">
                Other <br/> Programs
            </h1>
            <p className="p">
                Cakup is more than a mobile app. <br/>
                We provide corporate language training and study <br/>
                abroad program for learning foreign lamguages.
            </p>
           </div>
           <div className="card-container">
           <div className="circle"></div>
           <div className="circle2"></div>
           <div className="circle3"></div>
            <div className="card1">
<h1 className="">
    Cakap Corporate
</h1>
<img src="/heart.png" alt="" className="w-12" />
<p className="">
    Learn foreign language by sheduling your private class with your chosen time and teacher .
</p>

<button className="">See Details</button>
            </div>
            <div className="card2">
            <h1 className="">
    Cakap Corporate
</h1>
<img src="/aeroPlane.png" alt="" className="w-12" />
<p className="">
    Learn foreign language by sheduling your private class with your chosen time and teacher .
</p>

<button className="">See Details</button>
            </div>
           </div>
           
        </section>
    </div>
  )
}

export default OtherPrograms