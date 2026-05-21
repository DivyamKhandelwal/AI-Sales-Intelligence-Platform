"use client";

import { useState } from "react";
import axios from "axios";

export default function UploadCard() {

  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {

    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/upload-audio",
        formData
      );

      console.log(response.data);
setMessage("Audio uploaded successfully");

    } catch (error) {
      console.error(error);
      setMessage("Upload failed");

    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl w-[500px]">

      <h2 className="text-3xl font-bold mb-6">
        Upload Cold Call
      </h2>

      <p className="text-gray-400 mb-6">
        Upload your sales call recording and let AI analyze customer intent.
      </p>

      <select className="w-full bg-slate-800 p-3 rounded-xl mb-4">
        <option>SaaS</option>
        <option>Real Estate</option>
        <option>Recruitment</option>
        <option>Insurance</option>
      </select>

      <input
        type="file"
        onChange={(e) => {
          if (e.target.files) {
            setFile(e.target.files[0]);
          }
        }}
        className="w-full bg-slate-800 p-3 rounded-xl mb-6"
      />

      <button
        onClick={handleUpload}
        className="w-full bg-blue-600 hover:bg-blue-700 transition p-4 rounded-xl font-semibold"
      >
        Analyze Call
      </button>

      {message && (
        <p className="mt-4 text-green-400">
          {message}
        </p>
      )}

    </div>
  );
}