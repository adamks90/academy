"use client";

import { DotsThreeVertical } from "@phosphor-icons/react";

interface AcademyCardProps {
  name: string;
  programCount: number;
}

export default function AcademyCard({ name, programCount }: AcademyCardProps) {
  return (
    <div className="flex items-center justify-between border border-gray-200 rounded-xl px-6 py-5 hover:border-gray-300 transition-colors bg-white">
      <div>
        <h3 className="text-[15px] font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-400 mt-0.5">
          {programCount} {programCount === 1 ? "program" : "programs"}
        </p>
      </div>
      <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
        <DotsThreeVertical size={22} weight="bold" />
      </button>
    </div>
  );
}
