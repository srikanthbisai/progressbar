import { useEffect, useState } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';

function App() {
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((val) => val < 100 ? val + 1 : 100); // Stop at 100
    }, 100);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);
 
  return (
    <div className='flex flex-col items-center justify-center'>
      <span>Progress Bar</span>
      <ProgressBar value={value} />
    </div>
  );
}

export default App;
