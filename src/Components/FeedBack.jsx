import React, { useState } from 'react'

const FeedBack = () => {
    const [show,setShow]=useState(false)
    

    const handleSlide=()=>{
        setShow((show)=>!show)
    }
  return (
    <div>
        <section className="feedback">
            <div className="feedback-content">
                <h1 className="">
                What our customer are saying
                </h1>
                <p className="">
                    We will always try to improve the service and collect more variations <br/> in it, which can be  accessed from anywhere and anytime .
                </p>
            </div>
            {
                !show && <div className={`feedback-card ${!show ? 'slideToLeft' :''} `}>
                <img src="/arrow-left.png" alt="" className="img1 w-10 h-10" onClick={handleSlide} />
                <img onClick={handleSlide} src="/arrow-right.png" alt="" className="img2" />
                    <div className="">
                        <img src="man.jpg" alt="img" className="" />
                    </div>
                    <div className="feedback-cont">
                        <img src="/double-quates.png" alt="img" className="" />
                        <p className="bold">
                            I can tell something in English in front of many people at school.Cakap help me to build my vocabulary and their teachers are fun.
                        </p>
                        <p className='margin'>Micheal George</p>
                        <p className='text-slate-500'>Developer</p>
                    </div>
                </div>
            }
            {
                show && <div className={`feedback-card ${show ?'slideToRight' :''} `}>
                <img onClick={handleSlide} src="/arrow-left.png" alt="" className="img1 w-10 h-10" />
                <img onClick={handleSlide} src="/arrow-right.png" alt="" className="img2" />
                    <div className="">
                        <img src="user.png" alt="img" className="" />
                    </div>
                    <div className="feedback-cont">
                        <img src="/double-quates.png" alt="img" className="" />
                        <p className="bold">
                            I can tell something in English in front of many people at school.Cakap help me to build my vocabulary and their teachers are fun.
                        </p>
                        <p className='margin'>Micheal George</p>
                        <p className='text-slate-500'>Developer</p>
                    </div>
                </div>
            }
        </section>
    </div>
  )
}

export default FeedBack