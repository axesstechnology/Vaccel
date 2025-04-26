// ConnectButton.jsx
import { useDrawer } from '../Context/FormContext';

const ConnectButton = () => {
  const { openDrawer } = useDrawer();
  
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        openDrawer();
      }}
      className="px-4 py-2 text-sm font-medium border border-black rounded-full bg-white text-black hover:bg-black hover:text-white transition-colors duration-200"
    >
      Let's Connect
    </button>
  );
};

export default ConnectButton;