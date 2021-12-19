
export const userLogin = () => {
    return (dispatch, getState) => {
        setTimeout(()=>{
            console.log('ACTION READY FOR DISPATCH AGAIN!');
            // TODO
            console.log('state: ', getState());
        }, 2000)      
    }
}

const someAction = () => ({
    type: 'asdasd',
    payload: 'asdasd'
})


