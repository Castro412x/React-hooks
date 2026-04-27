function Navbar() {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90%] bg-white/10 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between text-white">
      
      <h1 className="font-bold">Aventra Travel</h1>

      <div className="hidden md:flex gap-6 text-sm">
        <p>Discover</p>
        <p>Journeys</p>
        <p>Travel Styles</p>
        <p>Inspirations</p>
        <p>Offers</p>
        <p>About</p>
      </div>

      <button className="bg-white text-black px-4 py-2 rounded-full text-sm">
        Book a trip
      </button>
    </div>
  );
}

export default Navbar;