<template>
    <div class="process_result mb-4">
        <p class="prgs mb-4 ">
            Overall progress
            <span class="info">
            <img src="~/assets/images/incentive/info.svg"/>
            <tooltip
                :data="{heading:'Please Note:',desc:'All submissions are validated and not all submitted points are appearing . Check submission status for more info'}"/>
            </span>
        </p>
        <p class="mb-4  ">
            You have sold: <span class="result" v-if="result">{{result.sold}}</span>
        </p>
        <p class="mb-4  ">
            You have earned:<span class="result" v-if="result">{{result.points}}</span>
        </p>
    </div>
</template>
<script>
    import Tooltip from "~/components/incentive/competition/tooltip";

    export default {
        components: {Tooltip},
        props: {
            result: {
                type: Object,
                default() { return null; }
            }
        }
    };
</script>
