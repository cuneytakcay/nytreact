import React from "react";

class Box extends React.Component {
  render() {
  	return (
  		<div style={{ height: 300, clear: "both" }}>
    		{children}
  		</div>
  	)
	}
}

export default Box;
