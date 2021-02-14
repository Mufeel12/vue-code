<template>
    <div class="complete mb-5">
        <div class="row mb-3">
            <div class="col-md-12 mb-3">
                <h2 class="mb-3">Completed product knowledge</h2>
            </div>
        </div>
        <div class="row mb-3">
            <complete-block />
        </div>
        <div class="row">
            <div class="col-md-12">
                <a href="#" class="load_more"> Load More..</a>
            </div>
        </div>
    </div>
</template>

<script>
import CompleteBlock from '~/components/product_knowledge/complete_block'

export default {
    components: {
        CompleteBlock,
    }
}
</script>
