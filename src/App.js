import React, { useState } from "react";
import { Form } from "./Form/Form";
import HouseWrapper from "./HouseCanvas/Table";

export const Context = React.createContext({});


function App() {
  const [countertopWidth, setСountertopWidth] = useState(5);
  const [countertopHeight, setСountertopHeight] = useState(5);
  const [countertopDepth, setCountertopDepth] = useState(0.1);
  const [countertopColor, setCountertopColor] = useState("#855757");
  const [legsColor, setLegsColor] = useState("black");
  const [file, setFile] = useState(false);
  const [isUploadedImage, setIsUploadedImage] = useState(false);


  return (
    <>
      <Context.Provider
        value={{
          some: 1,
          countertopWidth,
          setСountertopWidth,
          countertopHeight,
          setСountertopHeight,
          countertopDepth,
          setCountertopDepth,
          countertopColor,
          setCountertopColor,
          legsColor,
          setLegsColor,
          file,
          setFile,
          isUploadedImage,
          setIsUploadedImage,
        }}
      >
        <div style={{ height: "900px", display: "flex" }}>
          {/* <TableEditor /> */}
          <HouseWrapper />
          <Form />
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
