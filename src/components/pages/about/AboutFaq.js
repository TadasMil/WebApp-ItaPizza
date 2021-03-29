import React from "react";
import SectionName from "../../SectionName";
import { FaqItem } from "./FaqItem.js";

export const AboutFaq = () => {
  const frequentlyAskedQuestion = [
    {
      question: "Ar pristatymas nemokamas?",
      answer:
        "Taip, pristatymo kaina įskaičiuota į profrequentlyAskedQuestionto bendrą sumą.",
    },
    {
      question: "Ar ingredientai aukščiausios rūšies?",
      answer:
        "ItaPizza savo produktus ruošia aukščiausios rūšies ingredientai, antrarūšių ingredientų nėra.",
    },
    {
      question: "Ar galima atvykti ir atsiimti užsakyma?",
      answer: "Žinoma, kad taip. Atvykus reikia pateikti tik užsakymo numerį.",
    },
    {
      question: "Ar galima ateityje tikėti naujo meniu?",
      answer:
        "Mūsų meniu keičiasi pagal klientų pageidavimus, jeigu paklausa didelė, meniu ir jos produktai yra atnaujinami.",
    },
    {
      question: "Ar galima finansuoti ItaPizza?",
      answer:
        "Taip, jūs galite mus finansuoti. Geriausias ir tinkamiausias būdas finansavimo būtų užsisakyti iš mūsų internetinės svetainės maisto, kurį galite atsiimti pas mus arba užsisakyti į namus. Tokiu būdų, jūs ne tik mums padedate, bet ir pats sau, valgydamas švarų, tikrai bei sveiką maistą. Papildomo finansavimo mums nereikia kadangi mes nesame ne pelno siekianti organizacija ir nes žinome, jog klientai, kurie maitinasi sveikai, maitinasi tik pas mus!",
    },
  ];

  return (
    <>
      <SectionName title="D.U.K" />
      <div className="faq">
        {frequentlyAskedQuestion.map((x, i) => (
          <FaqItem key={i} question={x.question} answer={x.answer} />
        ))}
      </div>
    </>
  );
};
