import { useState } from 'react';
import { Home, Users, Settings, Menu } from 'lucide-react';

interface INavItem {
  name: string;
  icon: JSX.Element;
}

const navItems: INavItem[] = [
  { name: 'Home', icon: <Home className="w-5 h-5" /> },
  { name: 'Users', icon: <Users className="w-5 h-5" /> },
  { name: 'Settings', icon: <Settings className="w-5 h-5" /> },
];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`h-screen flex ${isDarkMode ? 'dark' : ''}`}>
      <div
        className={`bg-gray-200 dark:bg-gray-900 transition-all duration-300 ${
          isSidebarOpen ? 'w-64' : 'w-16'
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <Menu
            className={`w-5 h-5 cursor-pointer ${isSidebarOpen ? 'ml-0' : 'ml-2'
              }`}
            onClick={toggleSidebar}
          />
          <h2
            className={`text-lg font-bold ${isSidebarOpen ? 'block' : 'hidden'
              }`}
          >
            Dashboard
          </h2>
        </div>
        <ul>
          {navItems.map((item, index) => (
            <li key={index} className="py-2">
              <div className="flex items-center">
                {item.icon}
                <span
                  className={`ml-4 text-lg ${isSidebarOpen ? 'block' : 'hidden'
                    }`}
                >
                  {item.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 bg-gray-100 dark:bg-gray-800 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            className="bg-gray-200 dark:bg-gray-900 p-2 rounded-full"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <span className="text-lg">Light Mode</span>
            ) : (
              <span className="text-lg">Dark Mode</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;