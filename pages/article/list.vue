<template>
   <div class="article-layout">
      <div class="bg-img">
      	<img :src="articleList.image" />
      </div>
       <back />
      <blog :data="articleList"></blog>
      <congrates v-if="articleList.test_id" :data="articleList"></congrates>
      <leads :courses="articleList.other_courses" v-if="articleList.other_courses.length"></leads>
   </div>
</template>

<script>
    import Blog from '~/components/articles/blogs'
    import Back from '~/components/articles/back'
    import Congrates from '~/components/articles/congrates'
    import Leads from '~/pages/article/leads'

    export default {
    components: {
        Blog,
        Congrates,
        Leads,
        Back
    },
    async asyncData({redirect,store,params}) {
        try {
            let response = await store.dispatch('article/getArticle', params['slug'])

            return {
                articleList: response,
            }
        } catch (e) {}
    },
    data() {
        return {
            articleList: {
                widgets: []
            },
            courses: [],
        }
    },
    mounted() {
        localStorage.setItem('test_id', this.articleList.test_id);
        localStorage.setItem('article_slug', this.articleList.slug);
    }
}
</script>
