import React, { useState } from "react";
import SingleGrid from "../../../assets/single-grid.png";
import DoubleGrid from "../../../assets/double-grid.png";

const ToggleView: React.FC = () => {
  // for toggle button
  const lightBg = "bg-[#97A0CC]";
  const darkBg = "bg-[#0C1231]";

  // false is set to single grid
  const [grid, setGrid] = useState(false);

  return (
    <div>
      {/* <FilterBar /> */}
      <div className="grid grid-cols-2 gap-0 w-10 h-full flex align-center">
        <div className={darkBg}>
          <img src={SingleGrid} alt="" />
        </div>
        <div>
          <img src={DoubleGrid} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ToggleView;
