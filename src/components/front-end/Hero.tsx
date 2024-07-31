const Hero = () => {
  return (
    <div className="bg-[#e3edf6]">
      <div className="container grid md:grid-cols-2 py-8">
        <div className="flex items-center">
          <div className="max-w-[450px] space-y-4">
            <p className="text-topHeadingSecondary">
              Starting at <span className="font-bold">NGN 900</span>
            </p>
            <h1 className="text-topHeadingPrimary font-bold text-4xl md:text-5xl">
              The best note book collection 222
            </h1>
            <h3 className="text-2xl font-['Oregano', cursive]">
              Exclusive offer <span className="text-red-600">-10%</span> off
              this week
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
  );
};

export default Hero;
