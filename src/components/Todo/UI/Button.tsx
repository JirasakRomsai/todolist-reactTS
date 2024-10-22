import { FC, ReactNode } from "react"

interface ButtonProps {
    children: ReactNode,
    classes?: string;
}
const Button: FC<ButtonProps> = ({ children, classes, ...props }) => {
    return (
        <button className={classes} {...props}>
            {children}
        </button>
    )
}

export default Button