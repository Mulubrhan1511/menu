import { useState } from "react";

const menuItems = [
  { id: 1, category: 'ምግብ', subcategory: 'የጾም', name: 'ባርኮ', price: '250', image: '/images/food1.jpg' },
  { id: 2, category: 'ምግብ', subcategory: 'የፍስግ', name: 'ስጋ በስብ', price: '250', image: '/images/food2.jpg' },
  { id: 3, category: 'ወለታ', name: 'ቁርስ', price: '250', image: '/images/food3.jpg' },
  { id: 4, category: 'ካልእ', name: 'ጨዋታ', price: '250', image: '/images/food2.jpg' },
];

const categories = ['ምግብ', 'ወለታ', 'ካልእ'];
const subcategories = ['የጾም', 'የፍስግ'];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('ምግብ');
  const [activeSubcategory, setActiveSubcategory] = useState('የጾም');

  const filteredItems = menuItems.filter((item) => {
    if (activeCategory === 'ምግብ') {
      return item.category === 'ምግብ' && item.subcategory === activeSubcategory;
    }
    return item.category === activeCategory;
  });

  return (
    <div className="relative min-h-screen overflow-hidden text-white font-sans">
      {/* Background layer */}
      <img
        src="/images/bg-texture.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <img
        src="/images/fire-overlay.png"
        alt="flames"
        className="absolute bottom-0 left-0 w-full h-auto z-10 pointer-events-none"
      />

      {/* Content layer */}
      <div className="relative z-20">
        <header className="text-center pt-10">
          <h1 className="text-6xl font-extrabold text-yellow-400 drop-shadow-lg">Royal</h1>
          <p className="text-3xl text-white font-semibold -mt-2">lounge</p>

          {/* Category Buttons */}
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-md font-bold text-black transition ${
                  activeCategory === cat ? 'bg-yellow-400 ring-2 ring-white' : 'bg-yellow-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Subcategory Buttons (Only for ምግብ) */}
          {activeCategory === 'ምግብ' && (
            <div className="mt-4 flex justify-center gap-4">
              {subcategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubcategory(sub)}
                  className={`px-4 py-1 rounded-md text-sm font-semibold text-black transition ${
                    activeSubcategory === sub ? 'bg-yellow-300 ring-2 ring-white' : 'bg-yellow-500'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </header>

        {/* Food Items */}
        <main className="max-w-2xl mx-auto px-4 py-10 space-y-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-black/40 backdrop-blur-md rounded-xl px-6 py-4 shadow-lg border border-gray-700 hover:bg-black/60 transition"
              >
                <div>
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p className="text-yellow-400 font-bold text-lg">{item.price}</p>
                </div>
                <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-yellow-500">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-300">እቃ የለም</p>
          )}
        </main>

        {/* Fire shadow for blending */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#3f1e1e] via-transparent to-transparent pointer-events-none"></div>

        {/* Footer */}
        <footer className="text-center py-6 text-sm text-gray-400">
          <p>
            CONTACT US : <span className="text-white">09 37 03 563 33</span>
          </p>
          <p className="text-white">
            Free Home <span className="text-yellow-400">DELIVERY 🚚</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Menu;
