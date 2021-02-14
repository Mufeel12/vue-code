import Communication from '~/pages/communication/communication'
import ConversationSubject from '~/components/communication/conversation-subject'
import SelectTopic from '~/components/communication/select-topic'
import Conversation from '~/components/communication/conversation'

const routes = {
    path: '/communication/',
    name: 'communication',
    component: Communication,
    redirect: { name: 'communication.select-topic' },
    children: [
        {
            path: 'select-topic',
            name: 'communication.select-topic',
            component: SelectTopic,
        },
        {
            path: 'select-topic/:slug',
            name: 'communication.subject',
            component: ConversationSubject
        },
        {
            path: 'conversation/:id',
            name: 'communication.conversation',
            component: Conversation
        },
    ]
};

export default routes
