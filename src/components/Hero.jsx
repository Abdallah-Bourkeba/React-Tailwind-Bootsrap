import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <section id="home">
      <div className="text-white">
        <div className="container gap-3 mx-auto h-screen d-flex flex-column justify-center align-items-center text-center">
          <p className="uppercase font-bold text-[#00df9a]">
            Grow with data analytics
          </p>

          <h1 className="md:text-7xl sm:text-6xl text-4xl  font-bold">
            Grow with data
          </h1>

          <p className="md:text-5xl sm:text-4xl text-xl">
            Fast, Flexible, financing for{" "}
            <ReactTyped
              className="md:text-5xl sm:text-4xl text-xl inline"
              strings={["BTB", "BTC", "SASS"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </p>

          <p className="md:text-2xl text-xl text-gray-500">
            Monitor your data analytics to increase revenue for BTB, BTC, & SASS
            platforms.
          </p>

          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black ">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
