<template>
    <div class="training-layout">
        <aside-view/>

        <section class="layout-side">
            <navbar/>

            <div class="page-content">
                <nuxt />
            </div>
        </section>
    </div>
</template>



<script>
    import AsideView from '~/components/training/aside'
    import Navbar from '~/components/training/navbar'
    import Product from '~/pages/product_knowledge/product'
     
    
    export default {
        components: { AsideView, Navbar,Product}
    }
</script>
