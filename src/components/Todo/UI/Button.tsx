import { FC, ReactNode } from "react"

interface ButtonProps {
    children: ReactNode,
    classes?: string;
}
const Button: FC<ButtonProps> = ({ children, classes }) => {
    return (
        <button className={classes}>
            {children}
        </button>
    )
}

export default Button