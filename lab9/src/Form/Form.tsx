import React, { useEffect, useState } from "react";
import { UsersProps } from "../AppTypes";
import { Results } from "../Results/Results";
import { trackPromise } from "react-promise-tracker";
import { Loader } from "../Loader/Loader";
import { changeNickname } from "../store/actions/changeNickname";
import { useAppDispath } from "../store";
import store from "../store";
import "./Form.css";

export const Form: React.FC  = () => {
    const [nickname, setNick] = useState(store.getState().nickname);
    const firstUsers: UsersProps = {
      total_count: -1, 
      incomplete_results: false,
      items: []
    };
    const [userData, setData] = useState(firstUsers);
    const [errorC, setError] = useState(false);

    const dispath = useAppDispath();

    const changeNicknameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNick(e.target.value);
    }
  
    const getUsers = (e: React.MouseEvent<HTMLElement>) => {
      dispath(changeNickname(nickname));
      trackPromise(
        fetch(`https://api.github.com/search/users?q=${nickname}`,
        {
          headers: {
            authorization: `token ${process.env.REACT_APP_API_TOKEN}`
          }
        })
        .then((response) => {
          return response.ok ? response.json() : Promise.reject(response);
        })
        .then((data: UsersProps) => {
          setData(firstUsers);
          if (data.items)
              setData({...data});
          setError(false);

          if (data.message === "Validation Failed")
          {
            setError(true);
            setData(firstUsers);
          }
        })
        .catch(() => {
          setError(true);
          setData(firstUsers);
          console.log("ERROR");
        })
      );
    }

    const pressEnter = (e: any) => {
        if (e.keyCode === 13)
            getUsers(e);
    }

    return (
        <div className="form" onKeyDown={pressEnter}>
            <div className="text_form">
              <input 
                type="text" 
                value={nickname} 
                placeholder="Enter nickname" 
                onChange={changeNicknameInput}
                className="text"
              />
              <input 
                type="button"
                value="/"
                onClick={getUsers}
                className="button"
              />
            </div>
            <Loader />
            <Results errorC={errorC} userDataC={userData} />
        </div>
    )
};