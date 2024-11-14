import Card from "./Card";
import single from "./assets/single.png";
import double from "./assets/double.png";
import triple from "./assets/triple.png";

const data = [
  {
    src: single,
    special: false,
    text: "Single",
    plural: false,
    price: 300,
    features: ["500 GB Storage", "1 User Allowed", "Send up to 2 GB"],
  },
  {
    src: double,
    special: true,
    text: "Double",
    plural: true,
    price: 1000,
    features: ["600 GB Storage", "2 Users Allowed", "Send up to 5 GB"],
  },
  {
    src: triple,
    special: false,
    text: "Triple",
    plural: true,
    price: 2000,
    features: [
      "1000 GB Storage",
      "Unlimited Allowed Users",
      "Send up to 10 GB",
    ],
  },
];

function Cards() {
  return (
    <section id="cards">
      <div className="bg-white w-full">
        <div className="container overflow-hidden grid md:grid-cols-3 py-[10rem] gap-[4rem] items-center">
          {data.map((item, index) => (
            <Card
              key={index}
              src={item.src}
              text={item.text}
              special={item.special}
              plural={item.plural}
              price={item.price}
              features={item.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cards;
