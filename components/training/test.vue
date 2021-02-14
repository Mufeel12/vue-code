<template>
    <div class="test">
        <div class="card-body">
            <div class="info">23.11.2019 | TV | Beginner</div>

            <div class="top">
                <h4 class="name">OLED complete guide for begginers</h4>
                <p class="points">+10</p>
            </div>

            <p class="card-text">
                Grilling is going to the dogs. According to the Hearth, Patio &
                Barbecue Association, 81 percent of Americants own a grill and
            </p>

            <div class="bottom">
                <template v-if="isCompleted">
                    <a href="javascript:;" class="link">Revisit</a>
                    <span class="completed float-right">Completed</span>
                </template>
                <template v-else>
                    <a href="javascript:;" class="link">Continue</a>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     props: {
        isCompleted: {
            type: Boolean,
            default: false
        },
    },
}
</script>
