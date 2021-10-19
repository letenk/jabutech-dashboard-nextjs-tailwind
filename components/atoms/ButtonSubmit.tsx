import React from "react";
interface ButtonItemProps {
  title: String;

  colorButton: String;
}
export default function ButtonSubmit(props: ButtonItemProps) {
  // Get property props
  const { title, colorButton } = props;
  return (
    <button
      className={`bg-${colorButton}-500 hover:bg-${colorButton}-700 transition-all duration-150 px-2 py-2 rounded text-white font-semibold inline-flex items-center mb-2 lg:mb-0`}
    >
      {title}
    </button>
  );
}
