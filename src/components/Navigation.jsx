import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Info } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-red-700 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">HN Reader</Link>
        <div className="space-x-4">
          <NavLink to="/" icon={<Home className="w-4 h-4" />} label="Home" isActive={location.pathname === '/'} />
          <NavLink to="/about" icon={<Info className="w-4 h-4" />} label="About" isActive={location.pathname === '/about'} />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, label, isActive }) => (
  <Link to={to}>
    <motion.span
      className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium ${
        isActive ? 'bg-red-800 text-white' : 'text-red-100 hover:bg-red-600'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <span className="ml-1">{label}</span>
    </motion.span>
  </Link>
);

export default Navigation;