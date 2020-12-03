import React from "react";
import ok from "../assets/oh.webp";
const Farewell = () => {
  return (
    <div className="question-container  farewell-container">
      <div className="farewell-image">
        <img src={ok} alt="ok" />
      </div>
      <div>
        <p>Katılımınız için teşekkürler.</p>
      </div>
    </div>
  );
};

export default Farewell;
