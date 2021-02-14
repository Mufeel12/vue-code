import Vue from "vue";
import Router from "vue-router";

import AuthRoutes from "~/routes/Auth";
import TrainingRoutes from "~/routes/Training";
import ArticleRoutes from "~/routes/Articles";
import Terms from "~/routes/Terms";
import IncentiveRoutes from "~/routes/Incentive";
import CommunicationRoutes from "~/routes/Communication";
import Gifts from "~/routes/Gifts";

Vue.use(Router);

const defaultRoutes = [
    {
        path: "/",
        name: "index",
        redirect: { name: "training.start" }
    },
    {
        path: "*",
        name: "Not found",
        redirect: { name: "training.start" }
    }
];

const routes = defaultRoutes.concat(
    AuthRoutes,
    TrainingRoutes,
    ArticleRoutes,
    Terms,
    IncentiveRoutes,
    CommunicationRoutes,
    Gifts
);

export function createRouter() {
    const router = new Router({
        routes: routes,
        mode: "history",
        scrollBehavior() {
            const navbar = document.getElementById("navbar");
            if (navbar) {
                navbar.scrollIntoView();
            }
        }
    });

    return router;
}
