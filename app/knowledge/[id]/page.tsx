import CardKnowledge from "@/components/CardKnowledge";
import { get } from "http";
import React, { use, useEffect } from "react";
interface KnowledgeDetailsProps {
  params: {
    id: string;
  };
}
type Category = {
  id: number;
  name: string;
  hexadecimal_color: string;
};

type Knowledge = {
  id: number;
  title: string;
  description: string;
  categories: Array<Category>;
  quantity_views: number;

  additional_information: {
    applicability: string;
    importance_level: string;
    references: string;
  };
};

async function getKnowledge(id: string) {
  const response = await fetch(`http://localhost:3005/api/knowledge/${id}`, {
    method: "GET",
  });

  const data = await response.json();

  return data;
}

export default async function KnowledgeDetails({
  params,
}: KnowledgeDetailsProps) {
  const data = await getKnowledge(params.id);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between sm:px-[20px] md:px-[50px] py-[50px]">
      <CardKnowledge knowledge={data.knowledge} />
    </div>
  );
}
