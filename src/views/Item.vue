<template>
    <div>
        <section>
            <div>
                <div>
                    User
                </div>
                <div>
                    <router-link :to="`/user/${fetchedItem.user}`">
                        {{ fetchedItem.user }}
                    </router-link>
                    <div>
                        {{ fetchedItem.time_ago }}
                    </div>
                </div>
                <h2>{{ fetchedItem.title }}</h2>
            </div>
        </section>
        <section>
            <!-- 질문 댓글 -->
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed:{
        ...mapGetters([
            'fetchedItem'
        ])
    },
    created(){
        const itemId = this.$route.params.id
        this.$store.dispatch('FETCH_ITEM', itemId)
    }
}
</script>

<style>

</style>
