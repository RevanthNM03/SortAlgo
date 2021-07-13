import { useState } from "react";
import "../App.css";

const SortCode = ({ C, CPP, Java, JavaScript, Python }) => {
  const [lang, setLang] = useState("javaScript");
  const code = {
    c: C,
    cpp: CPP,
    java: Java,
    javaScript: JavaScript,
    python: Python,
  };
  const handleLangClick = (e) => {
    setLang(e.target.alt);
  };
  return (
    <>
      <div className="code">
        <ul className="lang">
          <li className={lang === "javaScript" ? "Show" : "dshow"}>
            <img
              onClick={handleLangClick}
              src={require("../image/javascript.png").default}
              alt="javaScript"
            />
          </li>
          <li className={lang === "c" ? "Show" : "dshow"}>
            <img
              onClick={handleLangClick}
              src={require("../image/c.png").default}
              alt="c"
            />
          </li>
          <li className={lang === "cpp" ? "Show" : "dshow"}>
            <img
              onClick={handleLangClick}
              src={require("../image/c++.png").default}
              alt="cpp"
            />
          </li>
          <li className={lang === "java" ? "Show" : "dshow"}>
            <img
              onClick={handleLangClick}
              src={require("../image/java.png").default}
              alt="java"
            />
          </li>
          <li className={lang === "python" ? "Show" : "dshow"}>
            <img
              onClick={handleLangClick}
              src={require("../image/python.png").default}
              alt="python"
            />
          </li>
        </ul>
        <div className="snippet-box">
          <div className="snippet">{code[lang]}</div>
        </div>
      </div>
    </>
  );
};

export default SortCode;
