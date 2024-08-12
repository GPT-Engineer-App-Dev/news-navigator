import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Info, Newspaper, Sun, Moon } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Here you would typically toggle a class on the body or update a context
  };

  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-800 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold flex items-center">
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Newspaper className="mr-2 text-green-200" size={28} />
          </motion.div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-green-200">
            HN Reader
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          <NavLink to="/" icon={<Home className="w-5 h-5" />} label="Home" isActive={location.pathname === '/'} />
          <NavLink to="/about" icon={<Info className="w-5 h-5" />} label="About" isActive={location.pathname === '/about'} />
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 bg-green-700 text-white rounded-full hover:bg-green-600 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, label, isActive }) => (
  <Link to={to}>
    <motion.span
      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        isActive ? 'bg-green-700 text-white' : 'text-green-100 hover:bg-green-700 hover:text-white'
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