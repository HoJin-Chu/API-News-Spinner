<template>
    <div class="header">
        <router-link to="/news">뉴스</router-link>&nbsp; 
        <router-link to="/ask">질문</router-link>&nbsp; 
        <router-link to="/jobs">일거리</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .header{
        color:white;
        background-color: rgb(39, 95, 128);
        display: flex;
        padding:8px;
    }

    .header .router-link-exact-active{
        color:#35495e;
    }

    .header a{
        color: white;
        text-decoration-line: none;
    }
</style>
