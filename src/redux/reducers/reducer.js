import { Title } from "react-native-paper"

const initialState = []

function notesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NOTE:
            return [
                ...state,
                {
                    id: action.id,
                    note: action.note
                }
            ]

     

        case DELETE_NOTE:
            const deletedNewArray = remove(state, obj => {
                return obj.id != action.payload
            })
            return deletedNewArray

        default:
            return state
    }
}

export default notesReducer

///////////



for ( let i =0; i<noteTitle.length(); i++) {
    if (noteTitle !== ' ')
    
}