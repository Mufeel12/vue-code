import IncentiveIndex from "~/pages/incentive/index";
import Competition from "~/pages/incentive/competition";
import Layout from "~/layouts/layout";
import History from "~/pages/incentive/history";

const routes = {
    path: "/incentive",
    component: Layout,
    name: "incentive",
    redirect: { name: "incentive.all" },
    children: [
        {
            path: "",
            name: "incentive.all",
            component: IncentiveIndex
        },
        {
            path: "hisotry",
            name: "incentive.hisotry",
            component: History
        },

        {
            path: ":id",
            name: "incentive.join-competition",
            component: Competition
        }
    ]
};

export default routes;
