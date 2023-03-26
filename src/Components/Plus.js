import { React, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Button, Form, Upload } from "antd";
import { showToastMessage } from "./Toast";
import axios from "axios";
import { useNavigate } from "react-router";
const Plus = (props) => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = "copy";
  };
  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    if (file.type !== "text/csv") {
      showToastMessage("Please drop a CSV file!", "negative");
      return;
    }
    setSelectedFile(file);
  };
  const handleFileSelect = (event) => {
    console.log("hello");
    const file = event.target.files[0];
    console.log(file);
    if (file.type !== "text/csv") {
      showToastMessage("Please select a CSV file!", "negative");
      return;
    }

    setSelectedFile(event.target.files[0]);
    event.target.value = null;
  };
  const handleUpload = () => {
    navigate("/analyser",{state:{
        file:selectedFile
    }})
    setSelectedFile(null);
    props.closeUploadStatementModal();
    // message.success('File uploaded successfully');
  };
  return (
    <div className="bg-white shadow-lg rounded-lg px-4 py-6">
      <label htmlFor="file-input" className="text-blue-600 cursor-pointer">
        <div
          className="bg-white shadow-lg rounded-lg px-4 py-6 border-dashed border-2 border-gray-300 flex flex-col items-center justify-center"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <svg
            aria-hidden="true"
            class="w-10 h-10 mb-3 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <div className="mb-4">
            {selectedFile ? (
              <div>
                <div className="font-medium mb-2">{selectedFile.name}</div>
                <div>{selectedFile.size} bytes</div>
              </div>
            ) : (
              <div className="text-gray-500">
                Drop a file here or browse to select a file
              </div>
            )}
            <input
              id="file-input"
              type="file"
              className="hidden"
              onChange={handleFileSelect}
              accept="text/csv"
            />
          </div>
        </div>
      </label>
      <div>
        <Button
          type="primary"
          className="m-5  bg-blue-600 hover:bg-blue-900"
          onClick={handleUpload}
        >
          Analyse
        </Button>
      </div>
    </div>
  );
};
export default Plus;
