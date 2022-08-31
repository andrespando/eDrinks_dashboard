import React from "react"

const ContentRowEdrinks = ({title, color, total}) => {
    return(
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>{title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{total}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
    export default ContentRowEdrinks
