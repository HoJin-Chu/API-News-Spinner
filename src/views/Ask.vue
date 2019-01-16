<template>
    <div>
        <div v-for="user in fetchedAsk" :key="user.title">{{ user.title }}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'fetchedAsk'
        ])
    },
    created(){
        this.$store.dispatch('FETCH_ASK')
    }
}
</script>

<style>

</style>
