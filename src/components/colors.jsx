import { useState } from "react";

function Colors() {
  const colors = [
    {
      id: "blue",
      name: "Titânium Azul",
      image: "/img/colors_blue__li170wg4gkae_medium.jpg",
      colorClass: "bg-blue-500",
    },
    {
      id: "silver",
      name: "Titânium Natural",
      image: "/img/colors_silver__eb8fu7zfvwmu_medium.jpg",
      colorClass: "bg-gray-300",
    },
    {
      id: "orange",
      name: "Titânium Laranja",
      image: "/img/colors_orange__cr2oq3n1dwk2_medium.jpg",
      colorClass: "bg-orange-500",
    },
  ];

  const models = [
    {
      name: "Pro Max",
      screen: "6.9 polegadas",
      storage: "256GB, 512GB, 1TB",
      battery: "33h de vídeo",
      weight: "221g",
    },
    {
      name: "Pro",
      screen: "6.3 polegadas",
      storage: "128GB, 256GB, 512GB",
      battery: "29h de vídeo",
      weight: "199g",
    },
  ];

  const [selectedColor, setSelectedColor] = useState("blue");

  return (
    <section id="colors" className="bg-black py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Escolha a cor</h2>
          <p className="text-xl text-gray-400">
            Quatro acabamentos disponíveis
          </p>
        </div>

        <div className=" flex justify-center mb-12">
          <div className="relative w-full max-w-3xl">
            <div className="relative flex items-center justify-center min-h[500px]">
              <img
                src={colors.find((color) => color.id === selectedColor).image}
                alt="iphone 17"
                className="max-w-full max-h-[600px] mx-auto"
              ></img>
            </div>

            <div className="absolute bottom-0 left-0 right-0 text-center">
              <div className="px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block">
                <h3>
                  {colors.find((color) => color.id === selectedColor).name}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color.id)}
              className={`relative transition-npm run build
                all duration-300 curosr-pointer`}
            >
              <div
                className={`w-16 h-16 rounded-full border-4 ${color.colorClass} ${selectedColor === color.id ? "border-white" : "border-gray-600"}`}
              ></div>
            </button>
          ))}
        </div>

        <div className="grid gap-8 mt-20 grid-cols-2">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-transparent rounded-3xl p-8 border border-gray-800"
            >
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-3">{model.name}</h3>
              <p className=" text-gray-400 mb-4">{model.screen}</p>
              <ul className="space-y-2 text-gray-300">
                <li>{model.storage}</li>
                <li>{model.battery}</li>
                <li>{model.weight}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 mb-5 hover:scale-105 shadow-md blue500/50 cursor-pointer ">
            Compre agora à partir de R$ 9.999,00
          </button>
          <p>Ou em ate 12x de R$ 833,25 sem juros</p>
        </div>
      </div>
    </section>
  );
}

export default Colors;
