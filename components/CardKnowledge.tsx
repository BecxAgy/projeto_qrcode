import React from "react";
import QrCodeAction from "./QrCodeAction";
import VisitsCount from "./VisitsCount";
import CategoryChip from "./CategoryChip";

const CardKnowledge = () => {
  return (
    <div className="flex  flex-col w-full p-10 shadow-md rounded-[15px]">
      <div className="flex justify-between">
        <h2 className="medium-24">React.js</h2>
      </div>

      <div className="py-4 flex  gap-8">
        <VisitsCount />
        <CategoryChip category="Desenvolvimento Web" color="9AC5E5" />
      </div>

      <div className="content flex flex-col gap-2">
        <h3 className="medium-18">Breve Descrição</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt
          malesuada diam sit amet maximus. Duis venenatis lacinia malesuada.
          Morbi et massa pulvinar, egestas dui in, congue arcu.{" "}
        </p>

        <h3 className="medium-18">Aplicabilidades</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt
          malesuada diam sit amet maximus. Duis venenatis lacinia malesuada.
          Morbi et massa pulvinar, egestas dui in, congue arcu. Nunc et auctor
          libero. Praesent mollis nunc sed consectetur lacinia. Praesent tempus
          ipsum quis eros fermentum viverra. Phasellus dapibus ipsum lorem, et
          varius elit auctor in. Proin fermentum mauris orci, ac malesuada ipsum
          vulputate a. Vivamus ac ante non nisl sodales luctus.
        </p>

        <h3 className="medium-18">Referências</h3>
        <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit. In</p>
      </div>
    </div>
  );
};

export default CardKnowledge;
