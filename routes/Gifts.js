
import Layout from "~/layouts/layout";
import AllGift from "~/pages/gifts/index";
import GiftDetail from "~/pages/gifts/gift-detail";
import PurchaseHistory from "~/pages/gifts/purchase-history";

const routes = {
    path: "/gifts",
    component: Layout,
    name: "gifts",
    redirect: { name: "gifts.all" },
    children: [
       
        {
            path: "",
            name: "gifts.all",
            component: AllGift
        },
        {
            path: "detail/:id",
            name: "gifts.detail",
            component: GiftDetail
        },
        {
            path: "history",
            name: "gifts.history",
            component: PurchaseHistory
        }
        
    ]
};

export default routes;
