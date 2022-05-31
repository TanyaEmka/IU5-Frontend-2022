import React, { useState, useEffect } from "react";
import { UserProps } from "../AppTypes";
import "./UserPage.css";
import { trackPromise } from "react-promise-tracker";
import { Loader } from "../Loader/Loader";
import { Link, useParams } from "react-router-dom";
import internal from "stream";
import { PageUserProps } from "./UserPageTypes";

export const UserPage = () => {
    let params = useParams();
    let login = params.pagesId != null ? params.pagesId : "";

    const initUser: PageUserProps = {
        name: "",
        bio: "",
        location: "",
        avatar: "",
        blog: "",
        followers: 0,
        following: 0
    }
    
    const [shortUser, setShortUser] = useState(initUser);
    const [firstString, setFirstString] = useState("");
    
    useEffect(() => {
        trackPromise(
          fetch(`https://api.github.com/users/${login}`, 
          {
            headers: {
              authorization: `token ${process.env.REACT_APP_API_TOKEN}`
            }
          })
          .then((response) => {
            return response.json();
          })
          .then((data: UserProps) => {
            console.log(data);
            initUser.name = data.name;
            initUser.bio = data.bio;
            initUser.location = data.location;
            initUser.avatar = data.avatar_url;
            initUser.blog = data.blog;
            initUser.followers = data.followers;
            initUser.following = data.following;
            if (shortUser.name == null)
              setFirstString(login);
            else 
              setFirstString(shortUser.name + " | " + login);
            setShortUser(initUser);
          })
        );
    }, [login]);
    

    return (
        <div className="user_page">
            <div className="back_a">
              <Link to="/">
                  <div className="back">
                      <span>{"<"}</span>
                  </div>
              </Link>
            </div>
            <div className="left_info">
                <div className="hat">
                    <img
                    className="page_avatar" 
                    src={shortUser.avatar}
                    />
                </div>
                <div className="basic_info">
                    <div className="name_login">
                        {shortUser.name != null ? <span className="name">{shortUser.name}</span> : ""}
                        {shortUser.name != null ? <span className="login"> | </span> : ""}
                        <span className="login">{login}</span>
                    </div>
                    <p className="bio">{shortUser.bio}</p>
                    <p className="location">{shortUser.location}</p>
                    <p className="blog">
                        blog: <a href={shortUser.blog}>{shortUser.blog}</a>
                    </p>
                </div>
                <div className="f_f">
                    <p>{shortUser.followers} followers | {shortUser.following} following</p>
                </div>
            </div>
        </div>
    );
}
