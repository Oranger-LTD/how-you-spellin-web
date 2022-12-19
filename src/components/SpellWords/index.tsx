import React from "react";

import "./style.css";

import { isBreak } from "../../utils";
import { StrongFirstCharWord } from "../StrongFirstCharWord";

interface SpellWordsProps {
  words: string[];
  inline?: boolean;
}

export const SpellWords: React.FC<SpellWordsProps> = ({ words, inline }) => (
  <ul className={`spellword-list ${inline && "spellword-list--inline"}`}>
    {words.map((word, i) => (
      <li
        className={`spellword-list-item ${
          isBreak(word) && "spellword-list-item--break"
        }`}
        key={word + i}
      >
        <StrongFirstCharWord text={word} />
      </li>
    ))}
  </ul>
);
