<template>
    <div>
        <p>title : {{ fetchedItem.title }}</p>
        <div>content : {{ fetchedItem.content }}</div>
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
