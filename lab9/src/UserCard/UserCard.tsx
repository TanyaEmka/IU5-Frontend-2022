import React, { useState, useEffect } from "react";
import { UserCardProps, ShortUserProps } from "./UserCardTypes";
import { UserProps } from "../AppTypes";
import "./UserCard.css";
import { trackPromise } from "react-promise-tracker";
import { Loader } from "../Loader/Loader";
import { Link, Outlet } from "react-router-dom";
import store from "../store";
import { changeUserCard } from "../store/actions/changeUserCard";
import { useAppDispath } from "../store";

export const UserCard: React.FC<UserCardProps> = ({ login }) => {
    const initUser: ShortUserProps = {
      name: store.getState().userCardR.userCard.name,
      bio: store.getState().userCardR.userCard.bio,
      location: store.getState().userCardR.userCard.location,
      avatar: store.getState().userCardR.userCard.avatar
    }
  
    const [shortUser, setShortUser] = useState(store.getState().userCardR.userCard);
    const [firstString, setFirstString] = useState("");

    const dispath = useAppDispath();
  
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
          dispath(changeUserCard(initUser));
          setShortUser(initUser);
        })
      );
    }, [login]);
    
    return (
      <div className="card">
        <div className="user">
          <div className="img">
            <Link 
              to={"/" + login}
              key={login}
            >
              <img
                className="avatar" 
                src={shortUser.avatar} 
                title=">info"
              />
            </Link>
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
        <Outlet />
      </div>
    )
};