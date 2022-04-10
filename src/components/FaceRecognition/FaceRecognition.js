import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ box, imageUrl }) => {
	return (
		<div className="center2 ma">
			<div className="absolute mt2">
				<img
					id="inputImage"
					alt="img"
					src={imageUrl}
					width="500px"
					height="auto"
				/>
				<div
					className="bounding-box"
					style={{
						top: box.topRow+"px",
						right: box.rightCol+"px",
						bottom: box.bottomRow+"px",
						left: box.leftCol+"px",
					}}
				></div>
			</div>
		</div>
	);
};

export default FaceRecognition;

// top: box.topRow,
// right: box.rightCol,
// bottom: box.bottomRow,
// left: box.leftCol,
