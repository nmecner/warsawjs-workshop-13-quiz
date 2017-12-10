<template>
  <div class="Game">
    <div class='Question-card--Wrapper' >
    <QuestionCard
    :question='currentQuestion'
    :onAnswer='checkAnswer'
    />
    </div>
    <aside>
    <QuestionsList
    :questions='questions'
    :current='currentRound'
    />
    </aside>
  </div>
</template>


<script>
  import data from "../../db"
  import {mapGetters, mapMutations} from 'vuex'
  import QuestionCard from "./QuestionCard"
  import QuestionsList from "./QuestionsList"

  const STATUSES = {
    NOT_STARTED: 'NOT_STARTED',
    PLAYING: 'PLAYING',
    WON: 'WON',
    LOST: 'LOST',
  }



  export default {
    name: 'Game',
    created () {
      this.$store.dispatch('initGame')
    },
    components:{
      QuestionCard,
      QuestionsList
    },
//    data () {
//      return {
//        currentRound: 0,
//        questions: data.questions,
//        status: STATUSES.NOT_STARTED,
//      }
//    },
    computed: mapGetters({
      currentQuestion: 'currentQuestion',
      questions: 'questions',
      status: 'status',
      currentRound: 'currentRound',
    }),
    methods: mapMutations({
      checkAnswer: 'checkAnswer'
    }),
    watch: {
      status: function(value, oldValue) {
        if (value === STATUSES.WON){
          this.$router.push({path: '/won'})
        } else if (value === STATUSES.LOST) {
          this.$router.push({path: '/lost'})
        }
      }
    }
  }
</script>


<style>

  .Game{
    display: flex;
  }
  .Question-card--Wrapper{
    flex: 1;
  }
</style>
