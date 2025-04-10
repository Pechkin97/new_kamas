const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_MASSAGE = 'ADD-MASSAGE';
const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE_NEW_MASSAGE_TEXT';


let store = {
    _state: {
        massages: {
            dialogsData: [
                {
                    id: 1,
                    name: 'Peter',
                    avatar: 'https://avatars.mds.yandex.net/i?id=f6f9f12c47f70e5ba9a3eceb7a678123_l-5234254-images-thumbs&n=13',
                    massagesData: [
                        {id: 1, massage: 'Hello', author: 'Peter'},
                        {id: 2, massage: 'I am learning React NOW!', author: 'Dima'},
                        {id: 3, massage: 'So good', author: 'Dima'},
                        {id: 4, massage: 'Be happy )', author: 'Peter'}
                    ],
                    newMassageText: "Type NEW",
                },

                {
                    id: 2, name: 'Andrey', avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/01/man-ava9.jpg',
                    massagesData: [
                        {id: 1, massage: 'Hello, Andrey', author: 'Dima'},
                    ],
                    newMassageText: "Type NEW",
                },
                {
                    id: 3,
                    name: 'Jack',
                    avatar: 'https://avatars.mds.yandex.net/i?id=f6f9f12c47f70e5ba9a3eceb7a678123_l-5234254-images-thumbs&n=13',
                    massagesData: [
                        {id: 1, massage: 'Hello, Jack', author: 'Dima'},

                    ],
                    newMassageText: "Type NEW",
                },
                {
                    id: 4,
                    name: 'Valery',
                    avatar: 'https://avatars.mds.yandex.net/i?id=f6f9f12c47f70e5ba9a3eceb7a678123_l-5234254-images-thumbs&n=13',
                    massagesData: [
                        {id: 1, massage: 'Hello, Valery', author: 'Dima'},
                    ],
                    newMassageText: "Type NEW",
                },
                {
                    id: 5,
                    name: 'Nikolay',
                    avatar: 'https://twitchinfo.ru/wp-content/uploads/2020/08/%D0%9A%D0%B0%D0%BA-%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BF%D0%BE-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B8-%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D1%83-%D0%B4%D0%BB%D1%8F-Youtube-VK-INSTAGRAMM-TIKTOK-TWITCH-0-12-03-920-1024x576.jpg',
                    massagesData: [
                        {id: 1, massage: 'Hello, Nikolay', author: 'Dima'},
                    ],
                    newMassageText: "Type NEW",
                },
                {
                    id: 6,
                    name: 'Pavel',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJocHpY6Jzj9xHddXMTNeq753_Mbqc9XbxA&s',
                    massagesData: [
                        {id: 1, massage: 'Hello, Pavel', author: 'Dima'},
                    ],
                    newMassageText: "Type NEW",
                }
            ],
        }
        ,
        profile: {
            postsData: [
                {id: 1, massage: 'Hi? how are you?', likesCount: 12},
                {id: 2, massage: "It's my first post!", likesCount: 3},
                {id: 3, massage: "Гип-гип, ура!", likesCount: 0},
                {id: 4, massage: "Хочу на страйкбол", likesCount: 0},
                {id: 5, massage: "Хус... ро... да!", likesCount: 2},
            ],
            newPostText:
                "My second text!"
        }
        ,
        sidebar: {
            navigation: [
                {id: 1, pageName: 'Profile'},
                {id: 1, pageName: 'Dialogs'},
                {id: 1, pageName: 'News'},
                {id: 1, pageName: 'Music'},
                {id: 1, pageName: 'Settings'}
            ],
            bestFriends:
                [
                    {
                        id: 1,
                        userName: 'Petr',
                        userAvatar: 'https://avatars.mds.yandex.net/i?id=f6f9f12c47f70e5ba9a3eceb7a678123_l-5234254-images-thumbs&n=13'
                    },
                    {
                        id: 2,
                        userName: 'Valery',
                        userAvatar: 'https://intrigue.dating/wp-content/uploads/2019/03/1147539-download-women-faces-wallpaper-1920x1080-for-iphone-5s.jpg'
                    },
                    {
                        id: 3,
                        userName: 'Jack',
                        userAvatar: 'https://i.pinimg.com/736x/78/a9/6c/78a96ccbedfa350d341add48931f94ea.jpg'
                    },
                ],
            newMassages:
                [
                    {
                        id: 1,
                        userName: 'Valery',
                        userAvatar: 'https://intrigue.dating/wp-content/uploads/2019/03/1147539-download-women-faces-wallpaper-1920x1080-for-iphone-5s.jpg',
                        massagesCount: 4
                    },
                    {
                        id: 1,
                        userName: 'Petr',
                        userAvatar: 'https://avatars.mds.yandex.net/i?id=f6f9f12c47f70e5ba9a3eceb7a678123_l-5234254-images-thumbs&n=13',
                        massagesCount: 2
                    },
                ]
        }
    },
    _callSub(state: any) {
        console.log(state)
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSub = observer
    },

    dispatch(action: any) { // {type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                massage: this._state.profile.newPostText,
                likesCount: 0,
            };
            this._state.profile.postsData.push(newPost);
            this._state.profile.newPostText = '';
            this._callSub(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profile.newPostText = action.newText;
            this._callSub(this._state)
        } else if (action.type === ADD_MASSAGE) {
            let newMassage = {
                id: 6,
                massage: this._state.massages.dialogsData.newMassageText,
                likesCount: 0,
            };
            this._state.massages.dialogsData.massagesData.push(newPost);
            this._state.massages.dialogsData.newMassageText = '';
            this._callSub(this._state)
        } else if (action.type === UPDATE_NEW_MASSAGE_TEXT) {
            this._state.massages.dialogsData.newMassageText = action.newText;
            this._callSub(this._state)
        }
    }
}


export const addPostActionCreator = () => (
    {type: ADD_POST}
)
export const updateNewPostTextActionCreator = (text: string) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text}
)
export const addMassageActionCreator = () => (
    {type: ADD_MASSAGE}
)
export const updateNewMassageTextActionCreator = (text: string) => (
    {type: UPDATE_NEW_MASSAGE_TEXT, newText: text}
)

export default store