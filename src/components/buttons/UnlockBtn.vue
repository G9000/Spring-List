<template>
        <div @click="onSubmit" class="unlock-btn">
            <fa icon="unlock" />
        </div>
</template>

<script>
export default {
    name: 'UnlockBtn',
    methods: {
        onSubmit() {
            this.$emit('restore-list')
        }
    },
    props: {
        edit: Boolean
    }
}
</script>
