import React, { useState } from "react";

import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "MP4", "GIF"];

function FileUp() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="Ddr"> 
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    </div>
  );
}

export default FileUp;