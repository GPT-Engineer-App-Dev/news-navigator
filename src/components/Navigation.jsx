import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Info, Newspaper } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-red-800 to-red-600 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold flex items-center">
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Newspaper className="mr-2 text-yellow-300" size={28} />
          </motion.div>
          HN Reader
        </Link>
        <div className="space-x-4">
          <NavLink to="/" icon={<Home className="w-5 h-5" />} label="Home" isActive={location.pathname === '/'} />
          <NavLink to="/about" icon={<Info className="w-5 h-5" />} label="About" isActive={location.pathname === '/about'} />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, label, isActive }) => (
  <Link to={to}>
    <motion.span
      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        isActive ? 'bg-yellow-500 text-red-800' : 'text-yellow-300 hover:bg-red-700'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </motion.span>
  </Link>
);

export default Navigation;