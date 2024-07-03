import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 shadow rounded">
        <h1 className="text-2xl font-bold">Beats Studio3 Wireless Headphone</h1>
        <div className="flex space-x-4">
          <Image
            src="https://example.com/headphone.png"
            alt="Beats Studio3"
            className="w-32 h-32"
          />
          <div className="flex flex-col">
            <p>
              Ergonomics on point. Up to 22 hours of listening time. Apple W1
              Chip & Wireless Bluetooth.
            </p>
            <p className="text-xl font-bold">$359.95</p>
            <button className="mt-2 p-2 bg-blue-500 text-white rounded">
              Add to cart
            </button>
            <button className="mt-2 p-2 bg-green-500 text-white rounded">
              Buy now
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-4 shadow rounded">Product 1</div>
        <div className="bg-white p-4 shadow rounded">Product 2</div>
        <div className="bg-white p-4 shadow rounded">Product 3</div>
        <div className="bg-white p-4 shadow rounded">Product 4</div>
      </div>
    </div>
  );
};

export default Home;
