import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import classes from './DragDrop.module.css'

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} classes={classes.drop_area} multiple={false} />
  );
}

export default DragDrop;