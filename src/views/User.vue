<template>
    <div>
        <p>name : {{ fetchedUser.id }}</p>
        <p>karma : {{ fetchedUser.karma }}</p>
        <p>created : {{ fetchedUser.created }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
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
