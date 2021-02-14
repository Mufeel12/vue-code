import Vue from 'vue'

Vue.mixin({
    methods: {
        getDomain(hostName) {
            return hostName.split('.')[1]
        }
    }
})
