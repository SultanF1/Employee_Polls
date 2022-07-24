import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,

} from "./_DATA"

export function getInitialData() {
    return Promise.all([
        _getQuestions(),
        _getUsers(),
    ]).then( ([questions,users]) => ({
        users,
        questions,
    }))
}
export function saveQuestion(info){
    return _saveQuestion(info)
}
export function saveQuestionAnswer({authedUser,qid,answer}){
    return _saveQuestionAnswer({authedUser,qid,answer})
}