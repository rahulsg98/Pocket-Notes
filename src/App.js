import { useEffect, useState } from "react";
import "./App.css";
import DesktopView from "./view/DesktopView/DesktopView";
import MobileView from "./view/MobileView/MobileView";
import NotesMobilePage from "./components/MobileComponents/NotesMobilePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [selected, setSelected] = useState(""); 
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
  }, [selected]);

  const checkScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  window.addEventListener("resize", checkScreenSize);

  return (
    <div className="App">
      {screenSize > 500 ? (
        <DesktopView />
      ) : (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <MobileView selected={selected} setSelected={setSelected} />
              }
            />
            <Route
              path="/notes"
              element={
                <NotesMobilePage
                  selected={selected}
                  setSelected={setSelected}
                  notes={notes}
                  setNotes={setNotes}
                />
              }
            />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
