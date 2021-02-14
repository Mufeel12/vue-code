<template>
    <div class="navbar-cover">
        <ul class="nav">
            <li
                class="item"
                v-for="menuItem in menuItems"
                :key="menuItem.title"
                @click="
                    menuItem.route === 'training'
                        ? updateSubmenuShow(true)
                        : updateSubmenuShow(false)
                "
            >
                <nuxt-link
                    :to="{ name: menuItem.route }"
                    class="link"
                    :class="{ current: isMenuPageOpen(menuItem.route) }"
                >
                    {{ menuItem.title }}
                </nuxt-link>

                <template
                    v-if="
                        isTrainingSubmenuOpen && menuItem.route === 'training'
                    "
                >
                    <ul class="sub-nav">
                        <li
                            class="item"
                            v-for="item in items"
                            :key="item.name"
                            @click.stop
                        >
                            <nuxt-link
                                :to="
                                    item.slug === 'javascript:;'
                                        ? item.slug
                                        : '/training/' + item.slug
                                "
                                class="link"
                                :class="{
                                    current:
                                        currentSubmenuPageOpen ===
                                        `${menuItem.layout}.${item.slug}`
                                }"
                            >
                                {{ item.name }}
                            </nuxt-link>
                        </li>
                    </ul>
                </template>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: {
        items: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    data() {
        return {
            menuItems: [
                {
                    title: 'Incentive programs',
                    route: 'incentive',
                    layout: 'incentive',
                    icon: '',
                },
                {
                    title: 'Training',
                    route: 'training',
                    layout: 'training',
                    icon: '',
                },
                {
                    title: 'Communication',
                    route: 'communication',
                    layout: 'communication',
                    icon: '',
                },
            ],
            currentSubmenuPageOpen: '',
        }
    },
    computed: {
        ...mapState({
            isTrainingSubmenuOpen: state => state.isTrainingSubmenuOpen
        }),
    },
    methods: {
        closeMobileMenu() {
            this.$emit('close');
        },
        updateSubmenuShow(isShow) {
            this.$store.dispatch('updateTrainingSubmenuOpen', isShow);
        },
        isMenuPageOpen(route) {
            return this.$router.currentRoute.matched[0].name === route;
        },
    },
    watch: {
        $route(to, from) {
            this.currentSubmenuPageOpen = to.name;
        }
  }
}
</script>

<style lang="scss" scoped>
</style>
