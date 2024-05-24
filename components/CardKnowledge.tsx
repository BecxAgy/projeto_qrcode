import React from "react";
import QrCodeAction from "./QrCodeAction";
import VisitsCount from "./VisitsCount";
import CategoryChip from "./CategoryChip";

const CardKnowledge = ({ knowledge }: any) => {
  return (
    <div className="flex  flex-col w-full p-10 shadow-md rounded-[15px]">
      <div className="flex justify-between">
        <h2 className="medium-24">{knowledge.title}</h2>
        <VisitsCount quantity_views={knowledge.quantity_views} />
        <QrCodeAction id={knowledge.id} />
      </div>
      <div className="flex overflow-y-auto w-[100%] gap-3 py-4">
        {knowledge.categories.map((category: any) => (
          <CategoryChip
            color={category.hexadecimal_color}
            key={category.id}
            category={category.name}
          />
        ))}
      </div>

      <div className="content flex flex-col gap-2">
        <h3 className="medium-18">Breve Descrição</h3>
        <p>{knowledge.description} </p>
        {knowledge.additionalInformation && (
          <div>
            <div className="mt-3">
              <h3 className="medium-18">Aplicabilidades</h3>
              <p>{knowledge.additionalInformation.applicability}</p>
            </div>
            <div className="mt-3">
              <h3 className="medium-18">Importância</h3>
              <p>{knowledge.additionalInformation.importance_level}</p>
            </div>
            <div className="mt-3">
              <h3 className="medium-18">Referências</h3>
              <p>- {knowledge.additionalInformation.references}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardKnowledge;
