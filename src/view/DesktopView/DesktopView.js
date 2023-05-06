import React, { useState } from "react";
import "./DesktopView.css";
import DesktopSidebar from "../../components/DesktopComponents/DesktopSidebar";
import DesktopHome from "../../components/DesktopComponents/DesktopHome";
import DesktopNotes from "../../components/DesktopComponents/DesktopNotes";

function DesktopView() {
  const [selected, setSelected] = useState(""); // eslint-disable-line
  const [notes, setNotes] = useState([]); // eslint-disable-line

  return (
    <div className="desktop">
      <DesktopSidebar selected={selected} setSelected={setSelected} />
      {selected.length > 0 ? (
        <DesktopNotes
          notes={notes}
          setNotes={setNotes}
          selected={selected}
          setSelected={setSelected}
        />
      ) : (
        <DesktopHome />
      )}
    </div>
  );
}

export default DesktopView;
