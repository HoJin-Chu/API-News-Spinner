import axios from 'axios'

// HTTP Request 그리고 Response와 관련된 기본설정 
const config = {
    baseUrl : 'https://api.hnpwa.com/v0/'
}

// API 함수들을 정리
function fetchList(pageName){
    return axios.get(`${config.baseUrl}${pageName}/1.json`)
}

function fetchUserInfo(userName){
    return axios.get(`${config.baseUrl}user/${userName}.json`)
}

function fetchCommentItem(itemId){
    return axios.get(`${config.baseUrl}item/${itemId}.json`)
}


export {
    fetchList,
    fetchUserInfo,
    fetchCommentItem,
}