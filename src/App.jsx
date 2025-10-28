import React, { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <div className="container">
      {/* Open Modal Button */}
      <button className="open-btn" onClick={() => setIsOpen(true)}>
        DOWNLOAD MOVIE
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="overlay" onClick={handleClose}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="modal-header">
              <h2>Notification</h2>
              <button className="close-btn" onClick={handleClose}>
                ×
              </button>
            </div>

            {/* Body */}
            <div className="modal-body">
              Your download will start shortly...
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
