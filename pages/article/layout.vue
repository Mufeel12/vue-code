<template>
    <div class="training-layout article-layout">
        <aside-view />

        <section class="layout-side">
            <navbar />

            <div class="page-content">
                <router-view />
            </div>
        </section>
    </div>
</template>

<script>
import AsideView from "~/components/training/aside";
import Navbar from "~/components/training/navbar";

export default {
    components: { AsideView, Navbar }
};
</script>
