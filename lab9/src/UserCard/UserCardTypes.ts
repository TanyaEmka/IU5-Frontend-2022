import {ApiUserProps} from "../AppTypes";
  
export type UserCardProps = {
    login: string
}
  
export type ShortUserProps = {
    name: string | null,
    bio: string | null,
    location: string | null,
    avatar?: string
}