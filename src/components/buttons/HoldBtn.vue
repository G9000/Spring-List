<template>
   <button @click="onHold(index)" class="hold-btn">
        <fa icon="lock" />
    </button>
</template>

<script>
export default {
    name: 'HoldBtn',
    methods: {
        onHold(index) {
            this.$emit('hold-list', index)
        }
    }
}
</script>
