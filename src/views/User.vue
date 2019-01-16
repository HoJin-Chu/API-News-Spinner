<template>
    <div>
        <UserProfile>
            <div slot="userName">{{ fetchedUser.id }}</div>
            <span slot="time">{{ fetchedUser.created }}, </span>
            <span slot="karma">{{ fetchedUser.karma }}</span>
        </UserProfile>
    </div>
</template>

<script>
import UserProfile from '../components/UserProfile'
import { mapGetters } from 'vuex';

export default {
    components:{
        UserProfile
    },
    computed:{
        ...mapGetters([
            'fetchedUser'
        ])
    },
    created(){
        // router로 이동할때 나온 $route로 params의 id를 저장한다 
        // 저장한 userName을 디스패치로 액션에 넘겨준다 
        const userName = this.$route.params.id
        this.$store.dispatch('FETCH_USER', userName)
    },
}
</script>

<style>

</style>
