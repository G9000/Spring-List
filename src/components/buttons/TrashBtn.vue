<template>
    <div  @click="onDelete(index)" class="trash-btn">
        <fa icon="trash" />
    </div>
</template>

<script>
export default {
    name: 'DeleteListBtn',
    methods: {
        onDelete(index) {
            this.$emit('delete-list', index)
        }
    }
}
</script>

<style>

</style>