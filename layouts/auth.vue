<template>
    <div class="auth-layout">
        <language-select/>

        <nuxt />
    </div>
</template>

<script>
    import LanguageSelect from '~/components/language-select'

    export default {
        components: { LanguageSelect },
    }
</script>
