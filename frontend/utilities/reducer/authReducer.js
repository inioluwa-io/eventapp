const INITIAL_STATE = {
    loading:false,
    user:{
        firstName:'',
        lastName:''
    },
    loggedIn:false
}

const authReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN":
            console.log("User Signed In")
            return {
                ...state,
                loggedIn:true
            }
        case "LOGOUT":
            console.log("User Logged out")
            return {
                ...state,
                loggedIn:false
            }
    
        default:
            return state
    }
}

export default authReducer