import { useState } from "react";
import "./App.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [
      { header: [1, 2, 3, 4, 5, 6, false] },
      "bold",
      "italic",
      "underline",
      "strike",
    ],
    ["link", "image"],
    ["blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    [{ indent: "-1" }, { indent: "+1" }],
  ],
};

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="header">
        <h1>AO3 Converter</h1>
        <button
          onClick={() => {
            navigator.clipboard.writeText(value);
          }}
        >
          Copy To Clipboard
        </button>
      </div>
      <div>
        <div className="converter">
          <div className="row">
            <div className="editor">
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                className="input"
                modules={modules}
              />
            </div>
            <div className="output">{value}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
