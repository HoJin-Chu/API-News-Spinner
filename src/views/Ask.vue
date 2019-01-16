<template>
    <div>
        <p v-for="item in fetchedAsk" :key="item.title">
            <router-link :to="`item/${item.id}`">
            {{ item.title }}
            </router-link>
            <small>{{ item.time_ago}} by {{ item.user }}</small>
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed:{
      ...mapGetters([
          'fetchedAsk'
      ])  
    },
    created(){
        this.$store.dispatch('FETCH_ASK')
    }
}
</script>

<style scoped>
    a{
        color:rgb(176, 194, 16);
        text-decoration: none;
        font-weight: 900;
    }
</style>
