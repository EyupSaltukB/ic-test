import React, { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="d-flex justify-content-center align-items-center gap-2 my-4">
      <input onChange={(e) => setIsChecked(e.target.checked)} type="checkbox" id="terms" className="form" />

      <div className="terms">
        <p className="bg-light text-black p-2 rounded-2 shadow-sm" style={{visibility : isHover ? "visible" : "hidden"}}>Size teslimat yapılmayacak</p>
        <label htmlFor="terms">Koşulları okudum ve kabul ediyorum.</label>
      </div>

      <button 
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      disabled={!isChecked} 
      className="btn btn-info">
        Siparişi Onayla
      </button>
    </div>
  );
};

export default Form;