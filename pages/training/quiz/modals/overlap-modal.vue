<template>
    <div class="overlap-container">
        <div class="overlap-content">
            <div class="image-container">
                <slot name="image"></slot>
            </div>
            <div class="title">
                <slot name="title"></slot>
            </div>
            <div class="content">
                <slot name="content"></slot>
            </div>
            <div class="actions">
                <slot name="actions"></slot>
            </div>
        </div>
        <div class="close-icon-container">
            <img src="../../../../assets/images/cross.png" alt="Close" @click="closeModal">
        </div>
    </div>
</template>

<script>
    export default {
        name: "OverlapModal",
        methods: {
            closeModal() {
                const articleSlug = localStorage.getItem('article_slug');
                this.$router.push({ path: '/article/' + articleSlug });
                this.$emit('closed');

            }
        }
    }
</script>

<style scoped lang="scss">
    .overlap-container {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10000000;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        width: 100vw;
        height: 100vh;
        overflow-y: scroll;
        background-color: white;
        justify-content: center;
        align-items: center;

        .overlap-content {
            width: 70%;
            height: 100%;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: center;
            padding-top: 95px;

            .image-container {
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    max-width: 360px;
                    max-height: 210px;
                }
            }

            .title {
                margin-top: 50px;
                height: 51px;
                width: 420px;
                color: #333333;
                font-size: 40px;
                font-weight: 600;
                line-height: 44px;
                text-align: center;
            }

            .content {
                height: 85px;
                width: 420px;
                color: #6B6B6B;
                font-size: 20px;
                line-height: 28px;
                text-align: center;
            }

            .actions {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                margin-top: 45px;
            }
        }

        .close-icon-container {
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: center;
            top: 0;
            right: 0;
            z-index: 10000000;
            width: 100px;
            height: 100px;

            img {
                cursor: pointer;
                width: 25px;
                height: 25px;
            }
        }
    }
</style>
