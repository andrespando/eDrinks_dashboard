import React from "react"

const ContentRowEdrinks = ({title, color, total}) => {
    return(
        <div>
        <div>
            <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>{title}</div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">{total}</div>
        </div>
                   
        </div>
        )
    }
    
    export default ContentRowEdrinks
