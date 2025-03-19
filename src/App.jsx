import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import DetectionCanvas from "./components/DetectionCanvas";
import "./style.css";
const App = () => {
  const [findings, setFindings] = useState([]);
  const imageUrl = "7_20241209_024613.jpg"; // Replace with your actual image URL

  useEffect(() => {
    const fetchFindings = async () => {
      try {
        const response = await fetch("output.json");
        const data = await response.json();
        if (data.inference_results?.output?.detection_results) {
          const parsedFindings = data.inference_results.output.detection_results.map(
            ([x_min, y_min, x_max, y_max, label]) => ({
              x: x_min,
              y: y_min,
              width: x_max - x_min,
              height: y_max - y_min,
              name: label,
            })
          );
          setFindings(parsedFindings);
        }
      } catch (error) {
        console.error("Error fetching findings:", error);
      }
    };

    fetchFindings();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar findings={findings} />
      <DetectionCanvas detectedObjects={findings} imageUrl={imageUrl} />
    </div>
  );
};
<DetectionCanvas
  imageUrl="7_20241209_024613.jpg"
  detectedObjects={[
    { x: 100, y: 50, width: 40, height: 40, name: "Circular_RBC" },
    { x: 200, y: 80, width: 50, height: 50, name: "WBC" },
  ]}
/>

export default App;
