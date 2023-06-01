import NavBar from "./scenes/NavBar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import { useEffect, useState } from "react";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import useMediaQuery from "./hooks/useMediaQuery";


function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className="app bg-deep-blue">
      <NavBar 
        isTopOfPage={isTopOfPage} 
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup 
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}/>
        )}
        <Landing setSelectedPage={setSelectedPage}/>
      </div>
      
      <div className="w-5/6 mx-auto md:h-full">
          <MySkills />
      </div>
      
      <LineGradient />
      <div className="w-5/6 mx-auto">
          <Projects />
      </div>
    </div>
  );
}

export default App;
