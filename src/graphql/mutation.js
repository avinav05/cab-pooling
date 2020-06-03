export const LINK_GENERATE_MUTATION=`
mutation{
    linkGenerate
}
`;
export const SEND_MESSAGE_MUTATION=`
mutation($link: String,$email:String,$text:String){
    sendMessage(link:$link,email:$email,text:$text)
}
`;
