import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onPictureSubmit, handleKeyDown }) => {
	return (
		<div>
			<p className="f3 b">{"Facify - AI Face Detector"}</p>
			<p className="f4">{"Give the AI the URL of your picture!"}</p>
			<div className="center">
				<div className="form center pa4 br3 shadow-5">
					{/* <input
						className="f4 pa2 w-70 center pv2 ph3 bg-white-30 hover-bg-white-70 outline-0 bn br-pill"
						type="tex"
					/>
					<button className="input-reset w-30 f6 b ttu tracked pa2 black link b dib pv2 ph3 bg-white-30 hover-bg-white-70 bn br-pill pointer">
						Detect
					</button> */}

					<div className="mb4">
						<input
							type="text"
							name="imageUrl"
							className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70"
							placeholder="URL"
							onChange={onInputChange}
							onKeyDown={handleKeyDown}
						/>
					</div>
					<div>
						<button
							className="pa2 input-reset white ba bg-transparent hover-bg-black hover-white w-30"
							onClick={onPictureSubmit}
							onKeyDown={handleKeyDown}
						>
							Detect
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;

// className="input-reset center db w-70 mw-100 pv2 ph3 black bg-white-30 hover-bg-white-70 outline-0 bn br-pill"
// className="input-reset center db w-30 near-black f6 b ttu tracked pv3 ph3 pointer bg-white-20 hover-bg-white-70 bn br-pill"
