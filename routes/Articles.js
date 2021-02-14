import List from '~/pages/article/list'
import Videos from '~/pages/article/videos'
import Layout from '~/layouts/layout'

const routes =
{
    path: '/article',
    component: Layout,
    name: 'article',
    redirect: { name: 'training' },
    children: [
        {
            path: 'video',
            name: 'article.video',
            component: Videos
        },
        {
            path: ':slug',
            name: 'article.list',
            component: List
        }
    ]

}


export default routes
