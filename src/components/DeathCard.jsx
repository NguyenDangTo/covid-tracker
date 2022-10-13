import React from "react";
import {FaSkull} from "react-icons/fa";

const DeathCard = ({TotalDeaths}) => {
  return (
    <div className="flex justify-center bg-white rounded-3xl shadow-lg md:max-w-full border-b-4 border-purple m-2 min-w-10">
      <div className="p-6 flex items-center w-full">
        <FaSkull className="text-purple" style={{fontSize: "50px"}} />
        <div className="mx-3">
          <h5 className="text-gray-900 text-2xl font-medium mb-2 text-purple">
            {TotalDeaths || "0"}
          </h5>
          <p className="text-gray-700 mb-4 text-2xl font-bold">Deaths</p>
        </div>
      </div>
    </div>
  );
};

export default DeathCard;
