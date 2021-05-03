<template>
    <div class="list-holder">

        <!-- Filter -->

        <div class="list-sorter">
            <button :class="{ btnActive: shownow === true && showhold === true }" class="general-btn" @click="showAll">All</button>
            <button :class="{ btnActive: shownow === true && showhold === false }" class="general-btn" @click="showNow">Ongoing</button>
            <button :class="{ btnActive: showhold === true && shownow === false }" class="general-btn" @click="showHold">Hold</button>
            <router-link to="/about" class="ghost-btn" style="margin-left: auto">about</router-link>
            <button @click="$emit('clear-list')" class="ghost-btn" >Clear History</button>
        </div>


        <div class="grid-list">
        
        <!-- Ongoing list -->

          <div :key="index" v-for="(list, index) in lists" class="ongoing-list" v-show="shownow == true || showall == true">

              <div class="list-content">
                  <div class="list-text">
                      <h5>{{list.value}}</h5>
                      <p>{{list.message}}</p>
                  </div>
                  <div class="list-utils">
                    <DeleteListBtn @click="$emit('delete-list', index)" v-bind:title="trashButton"/>
                    <EditBtn @click="$emit('edit-list', index)" v-bind:title="editButton" />
                    <HoldBtn @click="$emit('hold-list', index)" v-bind:title="holdButton"/>
                    <DoneBtn @click="$emit('done-list', index)" v-bind:title="doneButton" />
                  </div>
             </div>
          </div>

        <!-- Hold list -->

          <div :key="index" v-for="(hold, index) in holds" class="hold-list" v-show="showhold == true || showall == true">
              <div class="list-content">
                  <div class="list-text">
                      <h5>{{hold.value}}</h5>
                      <p>{{hold.message}}</p>
                  </div>
                  <div class="list-utils">
                    <UnlockBtn class="locked" @click="$emit('restore-list', index)" v-bind:title="restoreButton"/>
                  </div>
             </div>
          </div>


        </div>

      </div>
</template>

<script>
import DeleteListBtn from '../buttons/TrashBtn'
import DoneBtn from '../buttons/DoneBtn'
import EditBtn from '../buttons/EditBtn'
import HoldBtn from '../buttons/HoldBtn'
import UnlockBtn from '../buttons/UnlockBtn'

export default {
    name: 'OngoingList',
    props: {
        lists: Array,
        holds: Array
    },
    components: {
        DeleteListBtn ,
        DoneBtn,
        EditBtn,
        HoldBtn,
        UnlockBtn
    },
    data() {
        return {
            shownow: true,
            showhold: true,
            active: true,
            holdButton: "This is hold button",
            restoreButton: "This is a restore button",
            editButton: "This is edit button",
            trashButton: "this is delete button",
            doneButton: "Consider this done"
        }
    },
    methods: {
        showAll() {
            this.shownow = true
            this.showhold = true
        },
        showNow() {
            this.shownow = true
            this.showhold = false
        },
        showHold() {
            this.showhold = true
            this.shownow = false
        }
    }
}
</script>
