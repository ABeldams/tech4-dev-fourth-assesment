<script>
import navBar from '../components/head.vue'
import Foot from '../components/footer.vue'
import Discover from '../components/discoverEvent.vue'
import Trending from '../components/trendingEvent.vue'

export default{
name:'mainPage',
components: {
    navBar, Foot , Discover, Trending
    }

};
</script>
<template>

<div>
<navBar/>
<Trending />
<Discover/>


</div>
</template>