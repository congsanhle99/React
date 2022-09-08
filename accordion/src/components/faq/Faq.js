import React from "react";
import { AiOutlineBook } from "react-icons/ai";
import Question from "./Question";
import { questions } from "./data";
const Faq = () => {
  return (
    <>
      <section className="faq-sec">
        <div className="container faq">
          <div className="title --center-all">
            <AiOutlineBook size={36} color="orange" />
            <h2 className="--my2">FAQS</h2>
            <p className="--text-small">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut natus doloribus dolorum voluptates soluta,
              itaque numquam nam eos rerum pariatur! Sunt ratione, dolorem commodi quasi repellat repellendus nam quos
              quae.
            </p>
          </div>
          <div className="questions">
            {questions.map((x) => (
              <Question key={x.id} title={x.title} answer={x.answer} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
