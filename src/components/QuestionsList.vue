<template>
  <ol class="Question-list--Wrapper">
    <li
      :class='[{"Questions-list__item--success": index < current}, "Questions-list__item"]'
      v-for='(question, index) in questions'>
      <h4>question {{index+1}}</h4>
      <h5>Question worth: {{index*100 | currency}}</h5>
    </li>
  </ol>
</template>

<script>
  export default {
    name: 'QuestionsList',
    props: {
      questions: {
        default: () => ({})
      },
      current: {
        default: () => 0
      }
    }
  }
</script>



<style>
  .Question-list--Wrapper{
    background-color: beige;
    margin: 0;
    padding: 0;
  }
  h4 {
    margin: 0;
  }
  .Questions-list__item{
    list-style: none;
    margin: 0;
    padding: 5px;
  }
  .Questions-list__item--success {
    background-color: greenyellow;
  }
</style>
