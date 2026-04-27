 import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="relative h-[90vh] bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center text-white flex items-end">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <Navbar />

      {/* Content */}
      <div className="relative z-10 p-10 max-w-2xl">
        <p className="text-sm mb-2">New summer destinations added</p>

        <h1 className="text-5xl font-extrabold leading-tight">
          Discover the World <br /> Through Aventra
        </h1>

        <p className="mt-3 text-gray-200">
          Handpicked destinations crafted for modern explorers.
        </p>

        {/* Search bar */}
        <div className="mt-6 bg-white rounded-full flex items-center p-2 text-black">
          <input
            placeholder="Where to?"
            className="flex-1 px-3 outline-none"
          />

          <input type="date" className="px-3 outline-none" />

          <input
            placeholder="Guests"
            className="px-3 outline-none"
          />

          <button className="bg-black text-white px-5 py-2 rounded-full">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;