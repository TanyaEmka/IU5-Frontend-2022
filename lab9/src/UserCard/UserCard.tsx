import React, { useState, useEffect } from "react";
import { UserCardProps, ShortUserProps } from "./UserCardTypes";
import { UserProps } from "../AppTypes";
import "./UserCard.css";
import { trackPromise } from "react-promise-tracker";
import { Loader } from "../Loader/Loader";

export const UserCard: React.FC<UserCardProps> = ({ login }) => {
    const initUser: ShortUserProps = {
      name: "",
      bio: "",
      location: "",
      avatar: ""
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
          initUser.name = data.name;
          initUser.bio = data.bio;
          initUser.location = data.location;
          initUser.avatar = data.avatar_url;
          if (shortUser.name == null)
            setFirstString(login);
          else 
            setFirstString(shortUser.name + " | " + login);
          setShortUser(initUser);
        })
      );
    }, [login]);
    
    return (
      <div className="card">
        <div className="user">
          <div className="img">
            <a href={`https://github.com/${login}`}>
              <img
                className="avatar" 
                src={shortUser.avatar} 
                title=">github"
              />
            </a>
          </div>
          <div className="info">
            <p className="name_login">{firstString}</p>
            <p className="bio">{shortUser.bio}</p>
            <p className="location">{shortUser.location}</p>
          </div>
        </div>
        <div>
          <Loader />
        </div>
      </div>
    )
};