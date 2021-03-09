import React, {Suspense} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from 'react-router-dom';
import {
    LazyChatScreen,
    LazyLoginScreen,
    LazyRegisterScreen,
} from "./LazyRouter";

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Suspense fallback={
                    <h4>Cargandooooo.......</h4>
                }>
                    <Switch>
                        <Route
                            exact
                            path="/login"
                            component={LazyLoginScreen}
                        />
                        <Route
                            exact
                            path="/register"
                            component={LazyRegisterScreen}
                        />
                        <Route
                            path="/chat"
                            component={LazyChatScreen}
                        />
                        <Redirect to="/chat"/>
                    </Switch>
                </Suspense>
            </div>
        </Router>
    );
}

export default AppRouter;
