import laptop from "../components/assets/laptop.jpg";

const Analytics = () => {
  return (
    <section id="analytics">
      <div className="w-full bg-white py-8">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src={laptop}
              alt="Laptop displaying analytics dashboard"
              className="w-[500px] mx-auto my-auto"
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#00df9a] font-bold">
                DATA ANALYTICS DASHBOARD
              </p>
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                Manage Data Analytics Centrally
              </h1>
              <p className="text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum voluptas dignissimos libero ab. Quibusdam at possimus,
                nemo numquam expedita illum hic, omnis veniam explicabo
                consectetur suscipit facere rem nobis error.
              </p>
              <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
