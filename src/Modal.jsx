import React, { useState } from "react";
import "./App.css";

function Modal({ onClose }) {
  const [checked, setChecked] = useState(false);

  const handleOk = () => {
    if (!checked) {
      alert("Please agree to terms first!");
      return;
    }
    alert("Download started...");
    onClose();
  };

  return (
    <div className="overlay">
      <div className="modal">
        <h3>Download File</h3>
        <p>Do you want to download this file?</p>

        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          I agree to terms
        </label>

        <div className="btns">
          <button onClick={handleOk} disabled={!checked}>
            OK
          </button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
