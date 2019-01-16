<template>
    <div>
        <section>
            <UserProfile>
                <router-link slot="userName" :to="`/user/${fetchedItem.user}`">
                    {{ fetchedItem.user }}
                </router-link>
                <template slot="time"> {{ fetchedItem.time_ago }} </template>
            </UserProfile>
        </section>

        <h2>{{ fetchedItem.title }}</h2>

        <section>
            <!-- 질문 댓글 -->
            <div v-html="fetchedItem.content"></div>
        </section>

    </div>
</template>

<script>
import UserProfile from '../components/UserProfile'
import { mapGetters } from 'vuex'

export default {
    components:{
        UserProfile
    },
    computed:{
        ...mapGetters([
            'fetchedItem'
        ])
    },
    created(){
        const itemId = this.$route.params.id
        this.$store.dispatch('FETCH_ITEM', itemId)
    },
}
</script>

<style scoped>

</style>
