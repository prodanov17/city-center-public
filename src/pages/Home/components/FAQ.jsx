import React from "react";
import { FAQ_DATA } from "../../../constants/faqData";
import Card from "../../../UI/Card";
import Question from "./Question";

const FAQ = () => {
  return (
    <section className="w-5/6 max-w-3xl mx-auto mt-4">
      <Card bgColor="bg-white">
        <h1 className="text-center py-4 text-3xl">FAQ</h1>
        <div>
          {FAQ_DATA.map((e) => (
            <Question key={e.id} data={e} />
          ))}
        </div>
      </Card>
    </section>
  );
};

export default FAQ;
