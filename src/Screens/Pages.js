import React from 'react'
import './style.css'

export default function Page(prop) {
        return(
            <div className="page-div">
                <h4 className="page-name">{prop.page}</h4>
            </div>
        )
}