<template>
    <div class="v-player">
        <!-- <video :src="`${require(`~/assets/video/${src}`)}`"></video> -->
        <video :src="src" width="100%"></video>

        <transition name="fade">
            <div class="overlay" v-if="overlay">
                <button type="button" class="btn-play" @click="playVideo">
                    <img src="~/assets/images/launch/play.svg">
                </button>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        props: ['src'],

        data() {
            return {
                overlay: true
            }
        },

        methods: {
            playVideo() {
                let video = $(this.$el).find('video')

                this.overlay = false
                video.attr('controls', 'controls')
                video.prop('volume', 0.5)
                video[0].play()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .v-player {
        position: relative;
        display: flex;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
    }

    .btn-play {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        padding: 0;
        bottom: 0;
        background-color: transparent;
        border: 0;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        user-select: none;
        outline: 0;
        transition: transform .2s;

        &:hover {
            transform: scale(1.05);
        }
    }
</style>
