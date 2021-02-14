<template>
    <div class="model-row mt-4">
        <div class="row">
            <div class="col-md-4 col-lg-2 col-12 border-right">
                <div class="row-img">
                    <img src="~/assets/images/incentive/mobile.jpg" />
                </div>
            </div>
            <div class="col-md-4 col-lg-2 pdt-2">
                <h2>{{ row.name }}</h2>
                <a :href="val.image" v-if="row.type === 'gift_card'" class="download-link"
                    >Download</a
                >
                <p  v-else-if="row.type === 'item'">Delivery Date: {{ row.delivery_date }}</p>
            </div>

            <div class="col-md-4 col-lg-2 pdt-2 text_center">
                <p>Purchase date</p>
                <p class="date">{{ row.purchase_date }}</p>
            </div>
            <div class="col-md-3 col-lg-2 pdt-2 text_center">
                <p>Qty:</p>
                <p class="date">{{ row.quantity }}</p>
            </div>
            <div class="col-md-4 col-lg-2 pdt-2 text_center">
                <p>Price:</p>
                <p class="date">{{ row.price }} points</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        row: {
            type: Object,
            default() { return null; }
        }
    }
};
</script>
