function Card({ src, text, plural, features, price, special }) {
  return (
    <div
      className={`${
        special ? "scale-105 hover:scale-110 bg-gray-100" : " hover:scale-105"
      } w-full shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300`}
    >
      <img
        className={`${
          special ? "bg-transparent" : ""
        } w-20 mx-auto mt-[-3rem] bg-white`}
        src={src}
        alt={`${text} icon`}
      />
      <h2 className="text-2xl font-bold text-center py-8">
        {text} User{plural ? "s" : ""}
      </h2>
      <p className="text-center text-4xl font-bold">${price}</p>
      <div className="text-center font-medium mt-8">
        {features.map((e, i) => (
          <p key={i} className="border-b mx-8 py-2">
            {e}
          </p>
        ))}
      </div>
      <button
        className={`${
          special ? "bg-black text-white" : "bg-[#00df9a] text-black"
        }  w-full md:max-w-[200px] rounded-md font-medium my-6 mx-auto py-3`}
      >
        Start Trial
      </button>
    </div>
  );
}

export default Card;
