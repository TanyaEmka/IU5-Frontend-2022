export type PageUserProps = {
    name: string | null,
    bio: string | null,
    location: string | null,
    avatar?: string,
    blog?: string
    followers: number,
    following: number,
}