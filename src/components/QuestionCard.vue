<template>
  <div class="Question-card">
    <h3>{{question.question}}</h3>
    <ol class="answers">
      <li class="Answers__Answer" v-for='answer in answers'
          @click='onAnswer(answer)'>
        {{answer}}
      </li>
    </ol>
  </div>
</template>

<script>
  export default{
    name: 'QuestionCard',
    props: {
      question: {
        default: () => ({})
      },
      onAnswer: {
        default: () => ({})
      }
    },
    computed: {
      answers: function () {
        const answers = [
          // spread operator
          ...this.question.incorrect_answers,
          this.question.correct_answer
        ]

        return answers
      },
    }
  }
</script>

<style>
  .Question-card{
    background-color: #c7c7c7;
    padding: 5em;
  }
  .answers{
    padding: 0;
    margin: 10px;
    list-style: none;
  }
  .Answers__Answer{
    display: inline-block;
    border: 1px solid #000;
    padding: 8px;
    margin: 5px;
  }
</style>
