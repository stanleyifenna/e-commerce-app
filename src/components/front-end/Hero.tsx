import { Carousel } from 'antd';

const Hero = () => {
  return (
    <Carousel 
    dots={false}
    autoplay
   >
    <div className="bg-[#e3edf6]">
     <div className="container grid md:grid-cols-2 py-8">
       <div className="flex items-center">
         <div className="max-w-[500px] space-y-4">
           <p className="text-topHeadingSecondary">
           Step into Comfort and Style
           </p>
           <h1 className="text-topHeadingPrimary font-bold text-4xl md:text-5xl">
           Discover the Perfect Pair for Every Occasion.
           </h1>
           <h3 className="text-2xl font-['Oregano', cursive]">
             Exclusive offer <span className="text-red-600">10%</span> off
             every week
           </h3>
           <a className="inline-block bg-white rounded-md px-6 py-3 hover:bg-[#c77848] hover:text-white">
             Shop Now
           </a>
         </div>
       </div>
       <div>
         <img className="ml-auto" src="/shoe-bg.png" alt="hero" />
       </div>
     </div>
   </div>

   <div className="bg-[#d4b688]">
     <div className="container grid md:grid-cols-2 py-8">
       <div className="flex items-center">
         <div className="max-w-[500px] space-y-4">
           <p className="text-topHeadingSecondary">
           Walk Your Way to Excellence
           </p>
           <h1 className="text-topHeadingPrimary font-bold text-4xl md:text-5xl">
           Unmatched quality and style for every step you take.
           </h1>
           <h3 className="text-2xl font-['Oregano', cursive]">
           Top Choices from Our Fashion Experts
           </h3>
           <a className="inline-block bg-white rounded-md px-6 py-3 hover:bg-[#c77848] hover:text-white">
            Discover Now
           </a>
         </div>
       </div>
       <div>
         <img className="ml-auto" src="/shoe-bg.png" alt="hero" />
       </div>
     </div>
   </div>

   <div className="bg-[#beddca]">
     <div className="container grid md:grid-cols-2 py-8">
       <div className="flex items-center">
         <div className="max-w-[500px] space-y-4">
           <p className="text-topHeadingSecondary">
           Find Your Perfect Fit
           </p>
           <h1 className="text-topHeadingPrimary font-bold text-4xl md:text-5xl">
           Shoes that Adapt to Your Lifestyle.
           </h1>
           <h3 className="text-2xl font-['Oregano', cursive]">
           Stylish Shoes for City Life
           </h3>
           <a className="inline-block bg-white rounded-md px-6 py-3 hover:bg-[#c77848] hover:text-white">
             Shop Now
           </a>
         </div>
       </div>
       <div>
         <img className="ml-auto" src="/shoe-bg.png" alt="hero" />
       </div>
     </div>
   </div>

   <div className="bg-[#9faadf]">
     <div className="container grid md:grid-cols-2 py-8">
       <div className="flex items-center">
         <div className="max-w-[500px] space-y-4">
           <p className="text-topHeadingSecondary">
           Browse Best Sellers
           </p>
           <h1 className="text-topHeadingPrimary font-bold text-4xl md:text-5xl">
           Durable Footwear for the Great Outdoors
           </h1>
           <h3 className="text-2xl font-['Oregano', cursive]">
           Stylish Shoes for City Life
           </h3>
           <a className="inline-block bg-white rounded-md px-6 py-3 hover:bg-[#c77848] hover:text-white">
             Shop Now
           </a>
         </div>
       </div>
       <div>
         <img className="ml-auto" src="/shoe-bg.png" alt="hero" />
       </div>
     </div>
   </div>
 </Carousel>
  );
};

export default Hero;
