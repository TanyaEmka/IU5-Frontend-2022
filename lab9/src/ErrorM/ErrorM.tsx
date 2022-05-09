import React from "react";
import { ErrorMessageProps } from "./ErrorMTypes";
import "./ErrorM.css";

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
        <div className="error">
            <p>{message}</p>
        </div>
    )
}