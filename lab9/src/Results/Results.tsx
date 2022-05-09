import React from "react";
import { ResultsProps } from "./ResultsTypes";
import { ApiUserProps } from "../AppTypes";
import { UserCard } from "../UserCard/UserCard";
import { ErrorMessage } from "../ErrorM/ErrorM";

export const Results: React.FC<ResultsProps> = ({errorC, userDataC}) => {
    if (errorC || userDataC.total_count == 0)
        return <ErrorMessage message="Sorry, there are no results" />
    else
    return (
        <div className="cards">
            {userDataC.items.map((userC: ApiUserProps, item: number) => {
                return <UserCard key={item} login={userC.login} />
            })}
        </div>
    );
}