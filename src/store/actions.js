import { fetchUserInfo, fetchCommentItem, fetchList } from '../api/index'

export default {
    FETCH_LIST(context,pageName){
        return fetchList(pageName)
            .then(response => {
                context.commit('SET_LIST', response.data)
                return response
            })
            .catch(error => {
                // eslint-disable-next-line no-console
                console.log(error)
            })
    },
    FETCH_USER(context, userName){
        return fetchUserInfo(userName)
            .then( response => {
                context.commit('SET_USER', response.data)
                return response
            })
            .catch( error => {
                // eslint-disable-next-line no-console
                console.log(error)
            })
    },
    FETCH_ITEM(context, itemId){
        return fetchCommentItem(itemId)
            .then( response => {
                context.commit('SET_ITEM', response.data)
                return response
            })
            .catch( error => {
                // eslint-disable-next-line no-console
                console.log(error)
            })
    },
    
}