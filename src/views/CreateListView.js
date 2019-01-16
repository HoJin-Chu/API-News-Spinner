import ListView from './ListView'
import bus from '../utils/bus'

// news,ask,jobs의 행동들이 같아서 재활용하여 하이오더 컴포넌트 방식을 사용
export default function createListView(name){
    return {
        // 재사용할 인스턴스 ( 컴포넌트 ) 옵션들이 들어갈 자리 
        name,
        created(){
            bus.$emit('start:spinner')
            this.$store.dispatch('FETCH_LIST', this.$route.name)
                .then(() => {
                    bus.$emit('end:spinner')
                })
                .catch((error)=>{
                    // eslint-disable-next-line no-console
                    console.log(error)
                })
        },
        render(createElement){
            return createElement(ListView)
        }
    }
}