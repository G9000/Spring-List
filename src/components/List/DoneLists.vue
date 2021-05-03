<template>
  <div class="list-holder">

         <div :key="index" v-for="(done, index) in dones">
              <div class="list-content">
                  <div class="list-text">
                      <h5>{{done.value}}</h5>
                      <p>{{done.message}}</p>
                  </div>
             </div>
          </div>

    </div>
</template>

<script>
export default {
    name: 'DoneLists',
    props: {
        dones: Array
    }

}
</script>

<style>

</style>