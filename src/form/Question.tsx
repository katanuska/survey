import { PropsWithChildren } from "react";

type QuestionProps = {
  index: number;
  label: string;
};

export default function Question({
  index,
  label,
  children,
}: PropsWithChildren<QuestionProps>) {
  return (
    <div className="w-full p-6 mb-6 bg-white rounded-xl shadow-lg">
      <div className="pb-3 text-left">
        {index + 1}. {label}
      </div>
      {children}
    </div>
  );
}
