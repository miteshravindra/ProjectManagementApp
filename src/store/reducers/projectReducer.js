const initialState = {
    projects: [{ id: 1, title: 'help me find', content: 'blah blaj' }, { id: 2, title: 'hold my beer yo', content: 'blah blaj' }, { id: 3, title: 'toss the coin', content: 'blah blaj' }]
};
const projectReducer = (state = initialState, action) => {
    return state;
}

export default projectReducer;