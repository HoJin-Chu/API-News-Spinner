<template>
    <div>
        <ul class="item-list">
            <li v-for="item in fetchedList" :key="item.title" class="post">
                <div class="points">{{ item.points || 0 }}</div>

                <div>

                    <!-- 타이틀 영역 -->
                    <p class="item-title">
                        <a v-if="item.domain" :href="item.url">{{ item.title }}</a>
                        <router-link v-else :to="`item/${item.id}`">
                            {{ item.title }}
                        </router-link>
                    </p>

                    <!-- 기타 타이틀 영역 -->
                    <small class="link-text">
                        {{ item.time_ago}} by 
                        <router-link v-if="item.user" :to="`/user/${item.user}`" class="link-text">
                            {{ item.user }}
                        </router-link>
                        <a v-else :href="item.url"> {{ item.domain }} </a>
                    </small>

                </div>

            </li>
        </ul>
    </div>
</template>

<script>
// 라우터에 있는 정보로 분기처리를 할수있다 
import { mapGetters } from 'vuex'

export default {
    computed:{
        ...mapGetters([
          'fetchedList'
        ]),
    }
}
</script>

<style scoped>
    .item-list{
        margin:0;
        padding:0;
    }
    .post{
        list-style: none;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
    }
    .points{
        width:80px;
        height:60px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #0b3663;
    }
    .item-title{
        margin: 0;
    }
    .link-text{
        color:#828282;
    }
</style>
