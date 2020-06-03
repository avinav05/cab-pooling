export const GET_CHAT_DETAILS=`
subscription getChatDetails($link:String){
    getChatDetails(link:$link){
        email
        text
    }
}
`;
