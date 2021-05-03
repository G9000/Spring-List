<template>
    <div class="header">
        <!--- <img v-bind:src="cat" alt="" class="avatar"> --->
        <h1 v-if="time < 12 && time > 5">Good Morning {{ user }}</h1>
        <h1 v-else-if="time >= 12 && time < 17 ">Good Afternoon {{ user }}</h1>
        <h1 v-else-if="time >= 17 && time < 20">Good Evening {{ user }}</h1>
        <h1 v-else-if="time >= 20 && time < 24">Good Night {{ user }}</h1>
        <h1 v-else>Still Awake? {{ user }}</h1>
        <div>
            <div class="badge-container">
                <div class="badge-holder" v-show="countDones > 0">
                    <p class="badge done-badge">{{countDones}}</p>
                    <p>Done</p>
                </div>
                <div class="badge-holder" v-show="countTasks > 0">
                    <p class="badge current-badge">{{countTasks}}</p>
                    <p>On going</p>
                </div>
                <div class="badge-holder" v-show="countHolds > 0">
                    <p class="badge hold-badge">{{countHolds}}</p>
                    <p>On hold</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        countDones: Number,
        countHolds: Number,
        countTasks: Number,
        user: String
    },
    data() {
        // To  get  the time of the day
        const hours = new Date().getHours()
        return {
            time: hours,
        }
    },
}

</script>

<style scoped>

h1 {
    margin: 1.5rem 0;
}

.avatar {
  vertical-align: middle;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

</style>