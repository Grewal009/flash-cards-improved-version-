import { questions } from "./utils/constants";
import { useState } from "react";

const FlashCards = () => {
  const [selectedId, setSelectedId] = useState(0);
  console.log(selectedId);
  function handleClick(id) {
    console.log("selectedid", selectedId, id);
    selectedId === id ? setSelectedId(0) : setSelectedId(id);
  }
  return (
    <div>
      <h1 className="pt-10 text-center font-mono text-4xl font-extrabold">
        Flash-Cards
      </h1>
      <div className="px-5 py-5 w-full h-full flex flex-wrap justify-center items-center">
        {questions.map((q) => (
          <div
            onClick={() => handleClick(q.id)}
            key={q.id}
            className={
              selectedId === q.id
                ? "m-1 p-2 w-72 h-20 font-mono leading-5 flex justify-center items-center bg-red-400 text-lg font-bold"
                : "m-1 p-2 w-72 h-20 font-mono leading-5 flex justify-center items-center bg-green-300"
            }
          >
            <p>{selectedId === q.id ? q.answer : q.question}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashCards;
