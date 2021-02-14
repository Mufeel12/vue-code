<template>
    <div class="page-loader d-flex justify-content-center" v-if="loading">
        <div class="loader">
            <div class="spinner-border text-danger" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: false
    }),
    methods: {
        start () {
            this.loading = true
        },
        finish () {
            this.loading = false
        }
    }
}
</script>

<style lang="scss" scoped>
.page-loader {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    font-size: 30px;
    font-family: sans-serif;
    z-index: 1999;
}

.loader {
    position: relative;
    left: 0;
    top: 0;
    margin: auto;
    bottom: 0;
    right: 0;
}

.text-danger {
    color: $burgundy;
}

.spinner-border {
    width: 7.5rem;
    height: 7.5rem;
    border-width: 0.5em;
}
</style>
