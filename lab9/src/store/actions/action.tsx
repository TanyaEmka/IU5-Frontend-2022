export const changeNickname = (newNickname: string) => ({
    type: 'NICKNAME/CHANGE' as const,
    changer: { newNickname },
});

export type NicknameActions = ReturnType<typeof changeNickname>;