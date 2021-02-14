import Login from '~/pages/auth/login'
import StepOne from '~/pages/auth/registration-1'
import StepTwo from '~/pages/auth/registration-2'
import RequestSent from '~/pages/auth/request-sent'
import CreatePassword from '~/pages/auth/create-password'
import Verify from '~/pages/auth/verify'
import DivisionInfo from '~/pages/auth/division-info'

const routes = [
    {
        path: '/login',
        name: 'auth.login',
        component: Login
    },
    {
        path: '/registration/step-one',
        name: 'registration.step-one',
        component: StepOne
    },
    {
        path: '/registration/step-two',
        name: 'registration.step-two',
        component: StepTwo
    },
    {
        path: '/registration/request-sent',
        name: 'registration.request-sent',
        component: RequestSent
    },
    {
        path: '/registration/create-password/:user/:token',
        name: 'registration.create-password',
        component: CreatePassword
    },
    {
        path: '/registration/verify',
        name: 'registration.verify',
        component: Verify
    },
    {
        path: '/registration/division-info',
        name: 'registration.division-info',
        component: DivisionInfo
    }
]

export default routes
