<template>
    <aside class="training-aside">
        <div class="lg-logo">
            <nuxt-link to="/training/start">
                <img src="~/assets/images/logo-primary.svg" />
            </nuxt-link>
        </div>
        <aside-menu :items="items" />
    </aside>
</template>

<script>
import AsideMenu from './menu.vue';

export default {
    components: {
        AsideMenu,
    },
    props: {
        items: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    name: 'Aside',
}
</script>
