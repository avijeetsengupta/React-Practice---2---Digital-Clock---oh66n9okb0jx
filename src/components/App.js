import React, { useState } from "react";

function App() {
  setInterval(setTime, 1000);
  const time = new Date().toLocaleTimeString();
  const [Time, newTime] = useState(time);

  function setTime() {
    const newTimeZone = new Date().toLocaleTimeString();
    newTime(newTimeZone);
    // setInterval(newTimeZone,1000);
  }

  return (
    <div className="Clock" id="time">
      <h3 id="time">{Time}</h3>
      <button onClick={setTime}>Get Time</button>
    </div>
  );
}

export default App;

