import { fetchNewsList,fetchAskList,fetchJobsList, fetchUserInfo, fetchCommentItem, fetchList } from '../api/index'

export default {
    FETCH_NEWS(context){
        fetchNewsList()
            .then( response => {
                // 액션에서 state에대해서 값을 못넣어주므로 mutation에서 값을 처리하도록 넘긴다 
                context.commit('SET_NEWS',response.data)
                return response
            })
            .catch( error => {
                // eslint-disable-next-line no-console
                console.log(error)
            })
    },
    FETCH_ASK(context){
        fetchAskList()
            .then( response => {
                context.commit('SET_ASK', response.data)
            })
            .catch( error => {
                // eslint-disable-next-line no-console
                console.log(error)
            })
    },
    FETCH_JOBS({commit}){
        fetchJobsList()
            .then( ({data}) => {
                commit('SET_JOBS', data)
            })
            .catch( error => {
                // eslint-disable-next-line no-console
                console.log(error)
            })
    },
    FETCH_USER(context, userName){
        fetchUserInfo(userName)
            .then( response => {
                context.commit('SET_USER', response.data)
            })
            .catch( error => {
                // eslint-disable-next-line no-console
                console.log(error)
            })
    },
    FETCH_ITEM(context, itemId){
        fetchCommentItem(itemId)
            .then( response => {
                context.commit('SET_ITEM', response.data)
            })
            .catch( error => {
                // eslint-disable-next-line no-console
                console.log(error)
            })
    },
    FETCH_LIST(context,pageName){
        fetchList(pageName)
            .then(response => {
                context.commit('SET_LIST', response.data)
            })
            .catch(error => {
                // eslint-disable-next-line no-console
                console.log(error)
            })
    }
}