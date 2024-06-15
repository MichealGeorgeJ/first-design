import React from 'react';
import Navbar from './Navbar';

const LandingPage = () => {
  return (
    <div className="bg-img bg-no-repeat bg-cover h-full w-full overflow-hidden">
      <Navbar />
      <div className="mt-16 relative z-1">
        {/* <svg
          className="absolute top-0  -translate-x-40"
          width="2000"
          height="700"
          viewBox="0 0 1051 443"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="myClipPath">
              <path d="M8.37714 2C7.21047 9.83333 8.07714 29.4 20.8772 45C36.8772 64.5 61.377 81 65.377 106.5C69.0187 129.716 58.3182 166.5 65.377 178.5C72.4358 190.5 87.877 218.5 120.377 203C152.877 187.5 140.877 149.5 138.377 141.5C135.877 133.5 122.377 111 125.377 100C128.377 89 147.377 70.5 170.377 88.5C193.377 106.5 191.377 126.5 218.377 124C245.377 121.5 251.877 113 260.877 106.5C269.877 100 281.377 76 307.377 78C333.377 80 359.877 113 351.877 129.5C343.877 146 322.377 157.5 298.377 166.5C274.377 175.5 233.877 184 245.877 214C257.877 244 281.377 236 289.877 253C298.377 270 318.877 318.5 344.377 308.5C369.877 298.5 399.352 243.977 403.877 239C408.877 233.5 427.877 221 440.377 232C452.877 243 475.254 286.5 489.377 296.5C503.085 308.5 535.6 334.1 556 340.5C581.5 348.5 600.5 352 642 308.5C683.5 265 784.5 263 816 325C847.5 387 853 408 881.5 425C910 442 1019.5 436.5 1045.5 413" stroke="#9FEAFF" stroke-width="20"/>
            </clipPath>
          </defs>
          <path d="M8.37714 2C7.21047 9.83333 8.07714 29.4 20.8772 45C36.8772 64.5 61.377 81 65.377 106.5C69.0187 129.716 58.3182 166.5 65.377 178.5C72.4358 190.5 87.877 218.5 120.377 203C152.877 187.5 140.877 149.5 138.377 141.5C135.877 133.5 122.377 111 125.377 100C128.377 89 147.377 70.5 170.377 88.5C193.377 106.5 191.377 126.5 218.377 124C245.377 121.5 251.877 113 260.877 106.5C269.877 100 281.377 76 307.377 78C333.377 80 359.877 113 351.877 129.5C343.877 146 322.377 157.5 298.377 166.5C274.377 175.5 233.877 184 245.877 214C257.877 244 281.377 236 289.877 253C298.377 270 318.877 318.5 344.377 308.5C369.877 298.5 399.352 243.977 403.877 239C408.877 233.5 427.877 221 440.377 232C452.877 243 475.254 286.5 489.377 296.5C503.085 308.5 535.6 334.1 556 340.5C581.5 348.5 600.5 352 642 308.5C683.5 265 784.5 263 816 325C847.5 387 853 408 881.5 425C910 442 1019.5 436.5 1045.5 413" stroke="#9FEAFF" stroke-width="20"/>
          
          <image href="/man.jpg" x="70%" y="0" width="30%" height="30%" clipPath="url(#myClipPath)" />
          <image href="/man.jpg" x="80%" y="0" width="30%" height="30%" clipPath="url(#myClipPath)" />
          <image href="/man.jpg" x="90%" y="0" width="30%" height="30%" clipPath="url(#myClipPath)" />
        </svg> */}
        <svg className="absolute top-0  -translate-x-40"
          width="1800"
          height="600" viewBox="0 0 1051 443" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.37714 2C7.21047 9.83333 8.07714 29.4 20.8772 45C36.8772 64.5 61.377 81 65.377 106.5C69.0187 129.716 58.3182 166.5 65.377 178.5C72.4358 190.5 87.877 218.5 120.377 203C152.877 187.5 140.877 149.5 138.377 141.5C135.877 133.5 122.377 111 125.377 100C128.377 89 147.377 70.5 170.377 88.5C193.377 106.5 191.377 126.5 218.377 124C245.377 121.5 251.877 113 260.877 106.5C269.877 100 281.377 76 307.377 78C333.377 80 359.877 113 351.877 129.5C343.877 146 322.377 157.5 298.377 166.5C274.377 175.5 233.877 184 245.877 214C257.877 244 281.377 236 289.877 253C298.377 270 318.877 318.5 344.377 308.5C369.877 298.5 399.352 243.977 403.877 239C408.877 233.5 427.877 221 440.377 232C452.877 243 475.254 286.5 489.377 296.5C503.085 308.5 535.6 334.1 556 340.5C581.5 348.5 600.5 352 642 308.5C683.5 265 784.5 263 816 325C847.5 387 853 408 881.5 425C910 442 1019.5 436.5 1045.5 413" stroke="#BED8ED" stroke-width="20"/>
</svg>

        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center h-full lg:h-screen">
          <section className="sec-1 z-30 flex lg:w-3/4 w-11/12 items-center lg:justify-start lg:items-start flex-col order-last lg:order-first">
            <div className="flex flex-col justify-center items-center lg:items-start">
              <p className="w-64 h-8 bg-white rounded-full text-blue-400 flex items-center p-4">
                <img className="w-4 inline h-4" src="/firework2.png" alt="img" />
                No 1 platform for learning
              </p>
              <h1 className="text-5xl mt-5 font-bold text-center lg:text-left">
                The best Partner to Reach fluency
              </h1>
              <p className="mt-4 leading-relaxed">
                As an e-learning platform which facilitates two-way <br /> interaction between students and teachers, <br />
                Cakap enables you to learn anywhere.
              </p>
            </div>

            <div className="flex flex-row mt-5 justify-center lg:justify-start">
              <button className="bg-slate-800 text-white w-32 h-10 rounded-full">
                Login
              </button>
              <button className="bg-slate-300 w-32 h-10 rounded-full ml-3">
                Trial class
              </button>
            </div>
          </section>

          <section className="flex items-center justify-center relative">
            <div className="absolute bg-white top-4 left-10 w-40 rounded-lg h-24 bg-custom-gradient text-white p-3">
              <p className="text-lg">
                <img src="/money-bag.png" alt="img" className=" w-5 h-5 mr-1 inline-block" />IDR 10,000
              </p>
              <p className="text-sm">Use the opportunit</p>
              <button className="w-24 h-6 text-center mt-2 bg-slate-800 rounded-full text-sm">Click me !</button>
            </div>
            <div className="absolute bg-white bottom-20 right-10 w-40 rounded-lg h-24 p-3">
              <p className="text-lg">
                <img src="/star.png" alt="img" className=" w-5 h-5 inline-block" /> +500K
              </p>
              <p className="text-sm">Use the opportunit</p>
              <button className="w-24 h-6 text-center mt-2 bg-slate-800 rounded-full text-sm text-white">Click me !</button>
            </div>
            <div className="absolute top-10 right-40 w-8 h-8 bg-white flex items-center justify-center rounded-full">
              <img src="/playstore.png" alt="" className="w-6 h-6 p-1" />
            </div>
            <div className="absolute bottom-10 left-40 w-8 h-8 bg-white flex items-center justify-center rounded-full">
              <img src="/apple-logo.png" alt="" className="w-6 h-6 p-1" />
            </div>

            <div className="absolute bottom-16 -left-40 w-10 h-10 bg-white flex items-center justify-center rounded-full">
              <img src="/man.jpg" alt="" className="w-9 h-9  rounded-full" />
            </div>
            <div className="absolute bottom-40 -left-8 w-10 h-10 bg-white flex items-center justify-center rounded-full">
              <img src="/man.jpg" alt="" className="w-9 h-9  rounded-full" />
            </div>
            <div className="absolute bottom-0 right-24  w-10 h-10 bg-white flex items-center justify-center rounded-full">
              <img src="man.jpg" alt="" className="w-9 h-9 rounded-full" />
            </div>
            <div className="rounded-full p-2 w-3/4 flex justify-center items-center">
              <img
                src="/landingImage.jpg"
                alt="img"
                className="rounded-full lg:w-3/4 border-slate-200 border-solid border-12 p-4 bg-white"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
