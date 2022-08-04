// Left side of the App, allowing the previewing of CV

import React from "react";

const Preview = (props) => {
    const { intro } = props;

    console.log(intro);

    return(
        <div>
            <div>--</div>
            {intro.name}
            <div>--</div>
        </div>
    )
}

export default Preview;