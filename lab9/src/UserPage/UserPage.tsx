import React, { useState, useEffect } from "react";
import { UserProps } from "../AppTypes";
import "./UserPage.css";
import { trackPromise } from "react-promise-tracker";
import { Loader } from "../Loader/Loader";
import { Link, useParams } from "react-router-dom";

export const UserPage = () => {
    let params = useParams();
    return (
        <div className="user_page">
            <p>Hello!</p>
            <p>{params.pagesId}</p>
        </div>
    );
}
