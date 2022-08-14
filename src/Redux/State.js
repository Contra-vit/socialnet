import {renderEntireTree} from '../render';

let State = {
     profilePage: {
        postsData: [
            { id: 1, post: 'How', likesCount: 12 },
            { id: 2, post: 'I loose my mind', likesCount: 12 },
            { id: 3, post: 'You gotta see it', likesCount: 10 },
            { id: 4, post: 'Have a nice flight', likesCount: 7 }],
        newPostText: 'it-camasutra'
    },
    dialogPage: {
        dialogsData: [
            { id: 1, name: 'Mike' },
            { id: 2, name: 'John' },
            { id: 3, name: 'Adam' },
            { id: 4, name: 'Peter' }],
        messagersData: [
            { id: 1, message: 'How' },
            { id: 2, message: 'what is good' },
            { id: 3, message: 'Ku-ku' },
            { id: 4, message: 'Google, Peter' }]
    }

   
}
export let addPost = (postMessage) => {
    let newPost = {
        di:5, 
        post: postMessage,
        likesCount: 4
    };

    State.profilePage.postsData.push(newPost)
    renderEntireTree(State);
}

export let updateNewPost = (newText) => {
    State.profilePage.newPostText =newText;
    renderEntireTree(State);
}


export default State;
