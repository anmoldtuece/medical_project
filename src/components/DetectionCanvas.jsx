import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const DetectionCanvas = ({ detectedObjects, imageUrl }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="container">
      <TransformWrapper initialScale={1}>
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            {/* Zoom Controls */}
            <div className="controls">
              <button onClick={() => zoomIn()}>➕ Zoom In</button>
              <button onClick={() => zoomOut()}>➖ Zoom Out</button>
              <button onClick={() => resetTransform()}>🔄 Reset</button>
            </div>

            {/* Image & Detections */}
            <TransformComponent>
              <div className="image-container">
                <img src={imageUrl} alt="Detection" className="image" />
                {detectedObjects.map((obj, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`bounding-box ${selectedIndex === index ? "selected" : ""}`}
                    style={{
                      left: obj.x,
                      top: obj.y,
                      width: obj.width,
                      height: obj.height,
                    }}
                  >
                    <span className="label">{obj.name}</span>
                  </div>
                ))}
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default DetectionCanvas;
