import { MouseEventHandler } from "react"

export default interface ButtonProps {
    label: string
    action?: MouseEventHandler<HTMLButtonElement>
    color?: string
}