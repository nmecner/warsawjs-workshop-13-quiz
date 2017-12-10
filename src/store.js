import Vuex from 'vuex'
import {STATUSES} from './common/const'
import Vue from 'vue'
import data from '../db.js'

Vue.use(Vuex)

const INITIAL_STATE = {
  currentRound: 0,
  questions: [],
  status: STATUSES.NOT_STARTED,
}



const getters = {
  questions: state => state.questions,
  currentQuestion: state => {
    const currentRound = getters.currentRound(state)
    const questions = getters.questions(state)

    return questions[currentRound]
  },
  currentRound: state => state.currentRound,
  status: state => state.status
}

const actions = {
  // Normally: API asynchronous request --> that's why actions
  initGame: ({commit}) => {
    commit('resetGame', data.questions)

  }
}


const mutations = {
  resetGame: (state, questions) => {
    state.status = STATUSES.NOT_STARTED
    state.currentRound = 0
    state.questions = questions
  },
  checkAnswer: (state, answer) => {
  const currentQuestion = getters.currentQuestion(state)
  const isAnswerCorrect = currentQuestion.correct_answer === answer

  if (isAnswerCorrect) {
    if (state.currentRound === state.questions.length - 1) {
      state.status = STATUSES.WON
      return
    }
    state.currentRound++
  } else {
    state.status = STATUSES.LOST
  }
 }
}


export default new Vuex.Store({
  state: INITIAL_STATE,
  actions,
  mutations,
  getters
})
