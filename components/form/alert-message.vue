<template>
    <div class="alert-message">
        <div class="alert-icon">
            <slot name="alert-icon" />
        </div>

        <p class="alert-content">
            <slot />
        </p>
    </div>
</template>

<style lang="scss" scoped>
    .alert {
        &-message {
            margin: 13px 0 20px 0;
            display: flex;
        }

        &-icon {
            margin-right: 11px;
        }

        &-content {
            margin: unset;
            font-size: 1rem;
            color: $grey-1;
            line-height: 20px;
        }
    }
</style>
