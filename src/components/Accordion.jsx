import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const frequentlyAskQuestions = [
  { title: "Who we are?" },
  { title: "How we work?" },
  { title: "Our focus" },
];

const App = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[600px]  border rounded-lg overflow-hidden">
        {frequentlyAskQuestions.map((item, i) => (
          <div key={i} className="border-b last:border-b-0">
            <div className="px-5 py-4 flex items-center justify-between cursor-pointer">
              <p className="flex-1">{item.title}</p>
              <span>
                <i className="fas fa-angle-down"></i>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;