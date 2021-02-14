<template>
    <div class="navbar-block" id="navbar">
        <nav class="training-navbar navbar navbar-expand-md flex-nowrap">
            <div class="navbar-brand d-block d-sm-block d-md-none lg-logo">
                <nuxt-link to="/training/start">
                    <img
                        class="lg-logo"
                        src="~/assets/images/logo-primary.svg"
                    />
                </nuxt-link>
            </div>

            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
                @click="toggleMobileMenuStatus"
            >
                <span
                    class="navbar-toggler-icon"
                    :class="{ 'navbar-toggler-active': isMobileMenuActive }"
                ></span>
            </button>

            <!--        <nav class="main-nav">-->
            <!--            <ul class="list">-->
            <!--                <li class="item">-->
            <!--                    <a href="javascript:;" class="link">Statistics</a>-->
            <!--                </li>-->

            <!--                <li class="item">-->
            <!--                    <a href="javascript:;" class="link">Shop</a>-->
            <!--                </li>-->
            <!--            </ul>-->
            <!--        </nav>-->

            <profile class="d-none d-md-flex" :userInfo="userInfo" />
            <!-- <notification-bar
                class="d-none d-md-block"
                :notification-amount="10"
            /> -->
        </nav>

        <template v-if="isMobileMenuActive">
            <div class="navbar-dropdown d-block d-md-none">
                <profile :userInfo="userInfo" />
                <aside-menu :items="items" @close="toggleMobileMenuStatus" />
            </div>
        </template>
    </div>
</template>

<script>
import AsideMenu from './menu.vue';
import Profile from './profile.vue';
import NotificationBar from './notification-bar.vue';
import { mapState } from 'vuex';

export default {
    components: {
        AsideMenu,
        Profile,
        NotificationBar,
    },
    props: {
        userInfo: {
            type: Object,
            default() {
                return null;
            },
        },
        items: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    computed: {
        ...mapState({
            isMobileMenuActive: state => state.isMobileMenuActive
        }),
    },
    methods: {
        toggleMobileMenuStatus() {
            this.$store.dispatch('toggleMobileMenuStatus')
        }
    },
}
</script>
