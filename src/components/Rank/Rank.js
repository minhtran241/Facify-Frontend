import React from "react";

const Rank = ({ firstName, entries }) => {
	return (
		<div>
			<div className="f3">
				{`Hello, ${firstName}. Here is your current entry count`}
			</div>
			<div className="f1 b">{`${entries}`}</div>
		</div>
	);
};

export default Rank; 
