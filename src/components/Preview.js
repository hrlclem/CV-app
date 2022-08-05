// Left side of the App, allowing the previewing of CV

import React from "react";


const Preview = (props) => {
    console.log(props)

    return (
        <div className="previewDiv">
            <div className="introPrev">
                <div className="namePrev">{props.name}</div>  
                <div className="addressPrev">{props.address}</div>            
                <div className="mailPrev">{props.mail}</div>            
                <div className="numberPrev">{props.number}</div>            
                <div className="linkedinPrev">{props.linkedin}</div>            
                <div className="otherPrev">{props.otherLink}</div>            
            </div>
        </div>
    );
  };
  

export default Preview;