import { saveQuestionAnswer,saveQuestion } from "../utils/api"

export const RECEIVE_QUESTIONS = 'RECIEVE_QUESTIONS'
export const ADD_ANSWER = 'ADD_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function addQuestion(question){
    return {
        type:ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion(info){
    return (dispatch) => {
        
    return saveQuestion(info).then((formattedQuestion) => dispatch(addQuestion(formattedQuestion)))
        
    }
}



export function receiveQuestions(questions){
    return{
        type:RECEIVE_QUESTIONS,
        questions,
    }
}


function addAnswer({authedUser, qid, answer }){
    return{
        type:ADD_ANSWER,
        authedUser,
        qid,
        answer,
    }
}
export function handleAddAnswer(info){
    return (dispatch) => {
        dispatch(addAnswer(info));
        
        return saveQuestionAnswer(info).catch((e) => {
            console.warn("error in adding answer", e)
            alert('error adding answer')
        }) 
    }
}