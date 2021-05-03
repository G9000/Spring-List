<template>
   <button @click="onEdit(index)" class="edit-btn">
        <fa icon="pen" />
    </button>
</template>

<script>
export default {
    name: 'EditBtn',
    methods: {
        onEdit(index) {
            this.$emit('edit-list', index)
        }
    }
}
</script>
