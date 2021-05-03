<template>
        <div @click="onSubmit" class="add-list-btn">
            <fa icon="plus" />
        </div>
</template>

<script>
export default {
    name: 'AddListBtn',
    methods: {
        onSubmit() {
            this.$emit('add-list')
        }
    },
    props: {
        edit: Boolean
    }
}
</script>
