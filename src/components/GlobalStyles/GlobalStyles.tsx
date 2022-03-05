import React from "react"
import "./GlobalStyles.scss"

interface Props {
    children: React.ReactNode | React.ReactNode[]
}

const GlobalStyles: React.FC<Props> = ({ children }) => {
    return <>{children}</>
}

export default GlobalStyles
