import { useState } from "react";

const Card = ({ ques }) => {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible((s) => !s);
  }

  return isVisible ? (
    <div
      onClick={handleClick}
      className="m-1 p-2 w-72 h-20 text-lg font-bold font-mono leading-5 bg-red-200 flex justify-center items-center"
    >
      <p>{ques.answer}</p>
    </div>
  ) : (
    <div
      onClick={handleClick}
      className="m-1 p-2 w-72 h-20 font-mono leading-5 bg-green-200 flex justify-center items-center"
    >
      <p>{ques.question}</p>
    </div>
  );
};

export default Card;
