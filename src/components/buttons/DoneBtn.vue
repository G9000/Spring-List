<template>
   <button @click="onDone(index)" class="check-btn">
        <fa icon="check" />
    </button>
</template>

<script>
export default {
    name: 'DoneBtn',
    methods: {
        onDone(index) {
            this.$emit('done-list', index)
        }
    }
}
</script>
