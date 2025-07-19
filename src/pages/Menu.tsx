import { useEffect } from "react";

const menuItems = [
  {
    id: 1,
    name: 'ምግብ',
    title: 'VARIAN FOOD 01',
    price: '$12.00',
    image: '/images/food1.jpg',
  },
  {
    id: 2,
    name: 'ወለታ',
    title: 'VARIAN FOOD 02',
    price: '$12.00',
    image: '/images/food2.jpg',
  },
  {
    id: 3,
    name: 'ስጋው',
    title: 'VARIAN FOOD 03',
    price: '$12.00',
    image: '/images/placeholder.png',
  },
];



const Menu = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <header className="text-center pt-10">
        <h1 className="text-6xl font-bold text-yellow-400">Royal</h1>
        <p className="text-3xl text-white font-semibold -mt-2">lounge</p>
        <nav className="mt-6 space-x-4">
          {['About', 'Menu', 'Event'].map((item) => (
            <button key={item} className="bg-yellow-400 px-4 py-1 rounded-full text-black font-semibold">
              {item}
            </button>
          ))}
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10 grid gap-10 md:grid-cols-2">
        {menuItems.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row items-center bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <div className="flex-1 p-6">
              <h2 className="text-xl font-extrabold text-white">{item.name}</h2>
              <h3 className="text-white text-md mt-2 font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="mt-3 text-yellow-400 font-bold">Price: {item.price}</p>
            </div>
            <div className="md:w-40 md:h-40 w-full h-52 overflow-hidden rounded-full m-4 border border-yellow-400">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </div>
        ))}
      </main>

      <footer className="text-center pb-10 text-sm text-gray-400">
        <div className="mt-10">
          <p className="mb-1">CONTACT US : <span className="text-white">09 37 03 563 33</span></p>
          <p className="text-white">Free Home <span className="text-yellow-400">DELIVERY 🚚</span></p>
        </div>
      </footer>
    </div>
  );
}

export default Menu;