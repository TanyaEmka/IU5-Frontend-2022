import React from "react";
import { Rings } from "react-loader-spinner";
import { usePromiseTracker } from "react-promise-tracker";
import "./Loader.css";

export const Loader: React.FC = () => {
  const { promiseInProgress } = usePromiseTracker();

  if (promiseInProgress)
    return (
      <div className="rings">
        <Rings
          color="#00BFFF" 
          height="5vh" 
          width="5vh" 
        />
      </div>
    )
  else
    return <span></span>;
}