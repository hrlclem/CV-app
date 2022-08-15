// Left side of the App, allowing the previewing of CV

import React from "react";


const Preview = (props) => {
    return (
        <div className="previewDiv">
            <div className="persoDetailsDiv">
                    <div className="namePrev">{props.name}</div>  
                    <div className="addressPrev">{props.address}</div>            
                    <div className="mailPrev">{props.mail}</div>            
                    <div className="numberPrev">{props.number}</div>            
                    <div className="linkedinPrev">{props.linkedin}</div>            
                    <div className="otherPrev">{props.otherLink}</div>     
                    <div className="descriptionPrev">{props.description}</div>           
            </div>

            <div className="eduPrevDiv">
                    <div className="titleEduPrev">{props.titleEdu}</div>  
                    <div className="institutEduPrev">{props.institutEdu}</div>            
                    <div className="descriptionEduPrev">{props.descriptionEdu}</div>            
                    <div className="yearStartEduPrev">{props.yearStartEdu}</div>            
                    <div className="yearEndEduPrev">{props.yearEndEdu}</div>            
            </div>
        </div>
    );
  };
  

export default Preview;