<template>
  <div class="list-input">
    <div class="input-header">
      <h3>What’s the plan for today</h3>
      <img src="../assets/spring.svg" alt="spring">
    </div>
    <div class="input-content">
      <input type="text" :value='modelValue' 
      @input='$emit("update:modelValue", $event.target.value)' 
      placeholder="add task..."
      class="input-card title-card"
      >
      <textarea type="text" :value="message" 
      @input='$emit("update:message", $event.target.value)' 
      placeholder="add message..."
      class="input-card message-card"
      ></textarea>
      <AddListBtn @click="$emit('add-list')" v-bind:edit="edit" />
    </div>
  </div>
</template>

<script>
import AddListBtn from './buttons/AddBtn'

export default {
name: "InputSection",
components: {
  AddListBtn
},
props: {
    modelValue: String,
    message: String,
    edit: Boolean
}
}
</script>

<style scoped>


.title-card {
  height: 50px;
}

.message-card{
    height: 100px;
}

</style>