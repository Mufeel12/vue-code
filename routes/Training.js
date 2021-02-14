import Start from '~/pages/training/start'
import Layout from '~/layouts/layout'
import Courses from '~/pages/training/courses'
import Product from '~/pages/product_knowledge/product'
import Tests from '~/pages/training/tests'
// import Badge from '~/pages/badges/layout'
import Quiz from '~/pages/training/quiz/quiz'


const routes = [
    {
        path: '/training/',
        component: Layout,
        name: 'training',
        redirect: { name: 'training.start' },
        children: [
            {
                path: 'start',
                name: 'training.start',
                component: Start
            },
            {
                path: 'course',
                name: 'training.course',
                component: Courses
            },
            {
                path: 'test',
                name: 'training.test',
                component: Tests
            },
            {
                path: 'product_knowledge',
                name: 'training.product_knowledge',
                component: Product,
            },
            {
                path: 'quiz',
                name: 'training.quiz',
                component: Quiz
            }
        ]
    },
    // {
    //     path: '/badge',
    //     component: Badge,
    //     name: 'badge',
    //
    // }
]

export default routes
