import React from "react";
import Card from "./components/Card.component";

const App: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-orange-100">
      <div className="w-4/5 h-full overflow-scroll">
        <Card />
      </div>
    </div>
  );
};

export default App;
