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
    <nav className="bg-gradient-to-r from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-gray-800 dark:text-white text-2xl font-bold flex items-center">
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Newspaper className="mr-2 text-gray-600 dark:text-gray-300" size={28} />
          </motion.div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400">
            HN Reader
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          <NavLink to="/" icon={<Home className="w-5 h-5" />} label="Home" isActive={location.pathname === '/'} />
          <NavLink to="/about" icon={<Info className="w-5 h-5" />} label="About" isActive={location.pathname === '/about'} />
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full"
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
        isActive ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
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