import React from "react";

function FooterBar({ totalSelected }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 flex justify-between items-center">
      <span className="font-medium">Total Dish Selected {totalSelected}</span>
      <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
        Continue
      </button>
    </div>
  );
}

export default FooterBar;
