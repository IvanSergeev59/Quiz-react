import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-5b32b-default-rtdb.europe-west1.firebasedatabase.app/'
})