import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>

      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>

      <footer style={{
        marginTop: "20px", 
        padding: "10px", 
        textAlign: "center", 
        backgroundColor: "#f1f1f1",
        fontSize: "14px",
        color: "#555"
      }}>
        Created by <strong>Jiashu Qian</strong>
      </footer>

    </div>
  );
}
