import React from 'react'

export default function InnerBanner({title="title"}) {
    return (
        <div>
            <div className="innerBanner">
                <img className="img-responsive" src="/images/innerBanner.png" ></img>
                <h2>{title}</h2>
            </div>            
        </div>
    )
}
