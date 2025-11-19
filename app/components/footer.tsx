const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r font-mono from-green-600 to-emerald-500 text-white mt-20 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold">WorldExchange</h2>
          <p className="mt-2 text-green-100">
            Fast, reliable & real-time currency exchange platform.
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-3">Stay Updated</h3>
          <p className="text-green-100">Subscribe for latest exchange news.</p>

          <div className="mt-3 flex">
            <input
              type="text"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg w-full border-2 border-amber-50 text-white  focus:outline-none"
            />
            <button className="px-4 py-2 bg-white text-green-700 font-bold rounded-r-lg hover:bg-green-100 transition">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-green-100 border-t border-green-400 pt-4">
        © {new Date().getFullYear()} WorldExchange. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
