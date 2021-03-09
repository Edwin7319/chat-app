import {lazy} from 'react';

const LazyLoginScreen = lazy(() => import('./../components/login/LoginScreen'));
const LazyRegisterScreen = lazy(() => import('./../components/register/RegisterScreen'));
const LazyChatScreen = lazy(() => import('./../components/chat/ChatScreen'));

export {
    LazyChatScreen,
    LazyLoginScreen,
    LazyRegisterScreen,
}
