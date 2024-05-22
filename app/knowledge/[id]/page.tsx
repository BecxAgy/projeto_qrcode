import CardKnowledge from "@/components/CardKnowledge";
import React from "react";
interface KnowledgeDetailsProps {
  params: {
    id: string;
  };
}
const KnowledgeDetails = ({ params }: KnowledgeDetailsProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between sm:px-[20px] md:px-[50px] py-[50px]">
      <CardKnowledge />
    </div>
  );
};

export default KnowledgeDetails;
