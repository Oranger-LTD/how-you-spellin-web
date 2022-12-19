import React, { useState } from "react";

import "./style.css";

import { replaceCharWithSpellWord } from "../../utils";
import { SpellWords } from "../SpellWords";

export const App: React.FC = () => {
  const queryString = window?.location?.search;
  const params = new URLSearchParams(queryString || "");
  const presetText = params.get("text") || "RONCTTLA";
  const [text, setText] = useState<string>(presetText);
  const [isInline, setIsInline] = useState<boolean>(false);
  /* @ts-ignore */
  const spellWords = text.toUpperCase().split("").map(replaceCharWithSpellWord);
  const onTextChange = ({ target }: any) => setText(target.value);
  const onInlineCheckChange = () => setIsInline(!isInline);

  return (
    <div className="page-wrapper">
      <h1>How you spellin?</h1>
      <p>
        Convert text to spell words using the
        <br />
        <em>International Radiotelephony Spelling Alphabet</em>
      </p>
      <form className="words-form">
        <textarea
          className="words-input"
          onChange={onTextChange}
          value={text}
        />
        <label className="input-for-inline">
          Display Inline
          <input
            type="checkbox"
            checked={isInline}
            onChange={onInlineCheckChange}
          />
        </label>
      </form>
      <SpellWords words={spellWords} inline={isInline} />
    </div>
  );
};
