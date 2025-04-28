import { useState } from 'react';
import ThreeScene from './components/ThreeScene/ThreeScene';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import './App.css';

function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoaded = () => {
    setLoadingProgress(100);
    setIsLoaded(true);
  };

  return (
    <div className="App">
      <ThreeScene 
        onLoaded={handleLoaded}
        onProgress={setLoadingProgress}  // Make sure ThreeScene passes progress updates
      />
      <LoadingScreen progress={loadingProgress} />
      
      {isLoaded && (
        <>
          <Header />
          <main>
            <Hero />
            {/* Add other sections */}
          </main>
        </>
      )}
    </div>
  );
}

export default App;
