import React from 'react'

const Choose = () => {
  return (
    <div>
        <div className="grid lg:grid-cols-2 place-items-center mt-5  grid-cols-1 bg-[#f0ffff]">
            <section className="flex justify-between  ">
                <div className="flex flex-col relative">
                    <div className="absolute  w-48 rounded-md h-10 bg-white text-black shadow top-48 p-1 ">
                    <img src="/man.jpg" alt="" className="w-6 rounded-full  inline-block mr-2  " /> 
                    <p className="font-semibold inline-block text-sm"> Micheal George</p>

                    </div>
                <div className="">
                <img src="/man.jpg" alt="" className="w-60 rounded-full m-3   " />
                </div>
                <div className="flex justify-center">
                <img src="/man.jpg" alt="" className="w-32 rounded-full m-3  " />
                </div>
                </div>
                <div className="flex flex-col relative">
                <div className="absolute  w-48 rounded-md h-10 bg-white text-black shadow bottom-0 right-2 p-1 ">
                    <img src="/man.jpg" alt="" className="w-6 rounded-full  inline-block mr-2  " /> 
                    <p className="font-semibold inline-block text-sm"> Micheal George</p>

                    </div>
                <div className="">
                <img src="/man.jpg" alt="" className="w-20 rounded-full m-3   " />
                </div>
                <div className="">
                <img src="/man.jpg" alt="" className="w-72 rounded-full m-3  " />
                </div>
                </div>
            </section>
            <section className="p-16">
                <h1 className="text-4xl font-bold  ">
                    Why  should <br/> Choose Cakap ?
                </h1>
                <p className="mt-4 font-semibold text-slate-800">
                    <img src="/checkBox.png" alt="" className=" w-8 rounded-lg h-8 inline-block bg-slate-800 mr-4 p-1" />
                    Simple and Flexible
                </p>
                <p className="mt-4 ml-12">
                    Meet teachers and track your learning progress,anytime and anywhere in one app.
                </p>
                <p className="mt-4">
                    <img src="/thumsUp.png" alt="" className=" w-8 h-8 inline-block bg-slate-800 p-1 rounded-lg mr-4" />
                    Credible Learning Method
                </p>
                <p className="mt-4 ml-12">
                    Collabrating with trusted language institutions to provide the best curriculam.
                </p>
            </section>
        </div>
    </div>
  )
}

export default Choose