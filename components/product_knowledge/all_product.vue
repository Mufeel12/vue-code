<template>
    <div class="all-product">
        <div class="row mb-3">
            <div class="col-md-12 mb-3">
                <h2 class="mb-3">All Product Knowledge</h2>
            </div>
            <div class="col-7 col-md-4">
                <div class="search-box mb-3">
                    <i class="fa fa-search"></i>
                    <input
                        type="text"
                        class="search-form"
                        id="search"
                        placeholder="Oled"
                    />
                </div>
            </div>
            <div class="col-5 offset-md-5 col-md-3">
                <div class="dropdown float-right">
                    <a
                        class="btn btn-secondary dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        ><i class="fa fa-filter"></i> Filter</a
                    >
                    <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                    >
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#"
                            >Something else here</a
                        >
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-3">
            <block />
        </div>
        <div class="row">
            <div class="col-md-12">
                <a href="#" class="load_more"> Load More..</a>
            </div>
        </div>
    </div>
</template>
<script>
import Block from '~/components/articles/block'

export default {
   components: {
       Block,
   },
   props: {
    list: {
        type: Array,
        required: true
    }
 },
}
</script>
