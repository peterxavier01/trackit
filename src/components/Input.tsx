import React from "react";
import ArrowIcon from "../assets/icon-arrow.svg";

interface InputProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const Input: React.FC<InputProps> = ({ query, setQuery, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="w-full mb-11 select-none">
      <div className="flex items-center md:max-w-lg mx-auto">
        <input
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          type="text"
          placeholder="Search for any IP address or domain"
          className="w-full px-6 h-12 rounded-s-xl text-base md:text-lg outline-none"
        />
        <div
          onClick={handleSubmit}
          className="bg-very-dark-gray hover:opacity-90 cursor-pointer transition w-14 flex items-center justify-center h-12 rounded-e-xl"
        >
          <img src={ArrowIcon} alt="arrow right icon" />
        </div>
      </div>
    </form>
  );
};

export default Input;
