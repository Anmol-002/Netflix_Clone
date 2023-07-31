import React from "react";

function PlansScreen({ name, description }) {
  return (
    <div className="planScreen">
      <div className="plan">
        <div className="infos">
          <h5>{name}</h5>

          <h6>{description}</h6>
        </div>
        <button>Subsribe</button>
      </div>
    </div>
  );
}

export default PlansScreen;
