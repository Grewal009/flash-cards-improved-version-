import Card from "./Card";
import { questions } from "./utils/constants";

const FlashCards = () => {
  return (
    <div>
      <h1 className="mt-5 text-center font-mono text-4xl font-extrabold">
        Flash-Cards
      </h1>
      <div className="px-5 py-5 w-full h-full flex flex-wrap justify-center items-center">
        {questions.map((q) => (
          <Card ques={q} key={q.id} />
        ))}
      </div>
    </div>
  );
};

export default FlashCards;
