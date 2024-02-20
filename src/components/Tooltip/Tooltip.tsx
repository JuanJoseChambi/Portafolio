// import React from 'react'

import { ReactNode } from "react"

interface TooltipProp {
    children: ReactNode
}

function Tooltip({children}: TooltipProp) {
    return (
        <>
            <label></label>
            <div>{children}</div>
        </>
    )
}

export default Tooltip