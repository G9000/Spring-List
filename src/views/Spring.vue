<template>
<div class="header-container">
    <Header v-bind:countDones="countDones" v-bind:countTasks="countTasks" v-bind:countHolds="countHolds" v-bind:cat="cat" v-bind:user="user" /> 
    <InputSection @add-list="onSubmit" v-model='value' v-model:message ='message' v-bind:edit="edit" />
</div>
  <div class="container">
      <OngoingList v-bind:lists="lists" v-bind:holds="holds" @edit-list="onEdit" @done-list="onDone" @hold-list="onHold" @restore-list="onRestore" @delete-list="onDelete" @clear-list="onClear" />
  </div>
</template>

<script>


import Header from '../components/Header'
import InputSection from '../components/Input'
import OngoingList from '../components/List/OngoingLists'

export default {
    name: 'Spring',
    components: {
        InputSection,
        Header,
        OngoingList
    },
    data() {
        return {
            list: '',
            done: '',
            user: '',
            value: '',
            message: '',
            edit: '',
            cat: '',
            dones: [],
            holds: [
                {
                    value: "This is locked task",
                    message: "Click on the unlock icon to unlocked this task."
                }
            ],
            lists: [
                {
                    value: "Try to add a new task",
                    message: "Add a title and some message. Since still under development, please enter less than 100 characters",
                },
                {
                    value: "Delete Spring list",
                    message: "Try to click the trash icon to delete this list. If you can't find it, its at the top right corner",
                },
                {
                    value: "Put task on hold",
                    message: "Try to click the padlock icon to put this task on hold. Hold function will lock the task so that you don't accidentally delete or remove it",
                }
            ],
        }
    },

     // Load persistence

    mounted() {

         if (localStorage.getItem("lists", "dones", "holds", "user")) {
        this.user = JSON.parse(localStorage.getItem("user"))
        this.lists = JSON.parse(localStorage.getItem("lists"));
        this.dones = JSON.parse(localStorage.getItem("dones"));
        this.holds = JSON.parse(localStorage.getItem("holds"))
        }
        
        
        if(this.user.length < 1) {
            this.user = prompt("What should I call you?")
            return
        }
        //fetch('https://aws.random.cat/meow') 
            //.then(res => res.json())
            //.then(data => {
              //  this.cat = data.file
                //console.log(this.cat)
            //})
            //.catch(err => console.log(err.message))
    },
    
    computed: {

        countTasks() {
            return this.lists.length
        },
        countDones() {
            return this.dones.length
        },
        countHolds() {
            return this.holds.length
        }
    },

    methods: {

        onSubmit() {

            //Validation spam prevention
            if(!this.value) {
                alert('Please add at least the title')
                return
            }
            //console.log(this.value)
            if(this.editedList != null) {
                this.lists[this.editedList].value = this.value
                this.lists[this.editedList].message = this.message
                this.editedList = null
            } else {
                this.lists.push({
                value: this.value,
                message: this.message,
                status: "On going"
            })
            }
            this.value = '' // clear input
            this.message = ''
        },

        onDone(index) {
            let done = this.lists.splice(index, 1)
            Array.prototype.push.apply(this.dones, done)
            console.log(done)
        },


        onEdit(index) {
            //console.log(this.lists[index])
            if(!this.edit) {
               this.value = this.lists[index].value
               this.message = this.lists[index].message
               this.editedList = index
            } else {
                return this.edit = false
            }
        },

        onHold(index) {
            let hold = this.lists.splice(index, 1)
            Array.prototype.push.apply(this.holds, hold)
        },

        onRestore(index) {
            let restore = this.holds.splice(index, 1)
            Array.prototype.push.apply(this.lists, restore)
        },

        onDelete(index) {
            this.lists.splice(index, 1)
        },

        // Clear local storage
        onClear() {
            let result = confirm("You are going to lose all your data. Are you sure about this?")
            if (result == true) {
                localStorage.clear();
                location.reload();
            } else return
        }
    },

    // Adding persistence
    watch: {
        lists: {
            handler() {
                localStorage.setItem("user", JSON.stringify(this.user))
                localStorage.setItem("dones", JSON.stringify(this.dones))
                localStorage.setItem("lists", JSON.stringify(this.lists))
                localStorage.setItem("holds", JSON.stringify(this.holds))
            },
            deep: true
        }
    }
}
</script>
