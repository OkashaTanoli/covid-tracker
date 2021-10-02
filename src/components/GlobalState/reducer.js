const Reducer = (state,action ) =>{
    switch (action.type) {
        case 'CHANGE':
            return({
                country:action.payload
            })
        default:
            return state
    }
}

export default Reducer