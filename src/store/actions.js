import { fetchUserInfo, fetchCommentItem, fetchList } from '../api/index'

export default {
    FETCH_LIST(context,pageName){
        fetchList(pageName)
            .then(response => {
                context.commit('SET_LIST', response.data)
            })
            .catch(error => {
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
    
}