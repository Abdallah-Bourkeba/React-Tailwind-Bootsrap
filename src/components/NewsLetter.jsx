function NewsLetter() {
  return (
    <section id="newsletter">
      <div className="w-full py-16 text-white ">
        <div className="container grid lg:grid-cols-3 gap-8 ">
          <div className="lg:col-span-2 ">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 ">
              Want tips & tricks to optimize your flow?
            </h1>
            <p>Sign up to our newsletter and stay up to date.</p>
          </div>
          <div className="flex flex-col gap-2 justify-center ">
            <div className="flex gap-3 sm:text-base text-xs items-center justify-between w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 text-black w-full rounded-md focus:outline-none"
              />
              <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] px-6 py-3 ">
                Notify Me
              </button>
            </div>
            <p className="text-sm">
              We care bout the protection of your data. Read our{" "}
              <a href="#policy" className="text-[#00df9a] ">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
