import React from 'react'

export default function Heading({
        title='title here',
        description='describtion here'
    }) 
    
    {

    return (
        <div>
            <div className="layout-heading">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            
        </div>
    )
}
