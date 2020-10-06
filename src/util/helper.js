import get from 'lodash/get';
export function resParser(response,props){
    let redirect=get(response,"data.redirect")
    let status=get(response,"data.status")
    if (status>300){
        let error=get(response,"data.error")
        return error
    }
    if(redirect){
        props.history.push(redirect)
    }
}