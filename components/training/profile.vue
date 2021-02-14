<template>
    <div class="profile">
        <div class="stats">
            <p class="lead">Your rank:</p>
            <p class="count" v-text="userInfo.rank"></p>
        </div>

        <div class="stats">
            <p class="lead">Your score:</p>
            <p class="count" v-text="userInfo.score"></p>
        </div>

        <div class="profile-image-cover">
            <img src="~/assets/images/youre-almost-there.png" class="image" />
        </div>
    </div>
</template>

<script>
export default {
props: {
    userInfo: {
        type: Object,
        default(){
            return null;
        }
    },
},
}
</script>

<style lang="scss" scoped>
</style>
