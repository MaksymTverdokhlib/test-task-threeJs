import React, { useContext } from "react";
import { Context } from "../App";

export const Form = () => {
  const {
    countertopWidth,
    setСountertopWidth,
    countertopHeight,
    setСountertopHeight,
    countertopDepth,
    setCountertopDepth,
    setCountertopColor,
    countertopColor,
    legsColor,
    setLegsColor,
  } = useContext(Context);

  return (
    <>
      <div
        style={{
          width: "400px",
          padding: "10px 10px 10px 10px",
        }}
      >
        <div style={{ marginBottom: "20px" }}>Countertop</div>
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "15px" }}
        >
          <div>
            <div>Countertop width</div>
            <input
              type="number"
              value={countertopWidth}
              onChange={(e) => {
                setСountertopWidth(e.target.value);
              }}
            />
          </div>

          <div>
            <div>Countertop height</div>
            <input
              type="number"
              value={countertopHeight}
              onChange={(e) => {
                setСountertopHeight(e.target.value);
              }}
            />
          </div>

          <div>
            <div>Countertop depth</div>
            <input
              type="text"
              value={countertopDepth}
              onChange={(e) => {
                if (Number(e.target.value) >= 1) {
                  return;
                }
                setCountertopDepth(e.target.value);
              }}
            />
          </div>

          <div>
            <div>Countertop Color</div>
            <input
              type="color"
              style={{ marginBottom: "20px" }}
              value={countertopColor}
              onChange={(e) => {
                setCountertopColor(e.target.value);
              }}
            />
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>Table legs</div>
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "15px" }}
        >
          <div>
            <div>Table legs color</div>
            <input
              type="color"
              value={legsColor}
              onChange={(e) => {
                setLegsColor(e.target.value);
              }}
            />
          </div>
          <div
            onClick={() => {
              const myData = {
                countertopWidth,
                countertopHeight,
                countertopDepth,
                countertopColor,
                legsColor,
              };

              const fileName = "my-file";
              const json = JSON.stringify(myData, null, 2);
              const blob = new Blob([json], { type: "application/json" });
              const href = URL.createObjectURL(blob);

              const link = document.createElement("a");
              link.href = href;
              link.download = fileName + ".json";
              document.body.appendChild(link);
              link.click();

              document.body.removeChild(link);
              URL.revokeObjectURL(href);
            }}
          >
            Export configuration
          </div>
          <div>Import configuration</div>
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files) {
                const fileReader = new FileReader();
                console.log(e.target.files[0]);
                fileReader.readAsText(e.target.files[0], "UTF-8");
                fileReader.onload = (e) => {
                  console.log("e.target.result", JSON.parse(e.target.result));
                  const result = JSON.parse(e.target.result);
                  setCountertopColor(result.countertopColor || "#855757");
                  setCountertopDepth(result.countertopDepth || 0.1);
                  setLegsColor(result.legsColor || "black");
                  setСountertopWidth(result.countertopWidth || 5);
                  setСountertopHeight(result.countertopHeight || 5);
                };
              }
            }}
          />
        </div>
      </div>
    </>
  );
};
