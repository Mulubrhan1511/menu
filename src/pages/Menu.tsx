import { useEffect } from "react";

const menuItems = [
  { id: 1, name: 'ምግብ', price: '250', image: '/images/food1.jpg' },
  { id: 2, name: 'ቸኮሌ ጣፋጭ', price: '250', image: '/images/food2.jpg' },
  { id: 3, name: 'አልጋዎ', price: '250', image: '/images/food3.jpg' },
  { id: 4, name: 'ቸኮሌ ጣፋጭ', price: '250', image: '/images/food2.jpg' },
  { id: 5, name: 'ቸኮሌ ጣፋጭ', price: '250', image: '/images/food2.jpg' },
];

const categories = ['ምግብ', 'ወለታ', 'ካልእ'];

const Menu = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white font-sans">
      
      {/* Background texture layer */}
  <img
    src="/images/bg-texture.jpg"
    alt="background"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Fire overlay layer */}
  <img
    src="/images/fire-overlay.png"
    alt="flames"
    className="absolute bottom-0 left-0 w-full h-auto z-10 pointer-events-none"
  />
  <div className="relative z-20">
      <header className="text-center pt-10">
        <h1 className="text-6xl font-extrabold text-yellow-400 drop-shadow-lg">Royal</h1>
        <p className="text-3xl text-white font-semibold -mt-2">lounge</p>

        <div className="mt-8 flex justify-center gap-4">
          {categories.map((cat, index) => (
            <button
              key={cat}
              className={`px-6 py-2 rounded-md font-bold text-black ${
                index === 0 ? 'bg-yellow-400 ring-2 ring-white' : 'bg-yellow-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-10 space-y-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-black/40 backdrop-blur-md rounded-xl px-6 py-4 shadow-lg border border-gray-700"
          >
            <div>
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-yellow-400 font-bold text-lg">{item.price}</p>
            </div>
            <div className="w-20 h-20 rounded-full bg-yellow-700 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </div>
        ))}
      </main>

      {/* Optional fire effect simulation */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#3f1e1e] via-transparent to-transparent pointer-events-none"></div>

      <footer className="text-center py-6 text-sm text-gray-400">
        <p>CONTACT US : <span className="text-white">09 37 03 563 33</span></p>
        <p className="text-white">Free Home <span className="text-yellow-400">DELIVERY 🚚</span></p>
      </footer>
      </div>
    </div>
  );
};

export default Menu;
