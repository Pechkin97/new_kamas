import {renderApp} from "../render";

let state = {
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
                ]
            },
            {
                id: 2, name: 'Andrey', avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/01/man-ava9.jpg',
                massagesData: [
                    {id: 1, massage: 'Hello, Andrey', author: 'Dima'},
                ]
            },
            {
                id: 3,
                name: 'Jack',
                avatar: 'https://avatars.mds.yandex.net/i?id=f6f9f12c47f70e5ba9a3eceb7a678123_l-5234254-images-thumbs&n=13',
                massagesData: [
                    {id: 1, massage: 'Hello, Jack', author: 'Dima'},

                ]
            },
            {
                id: 4,
                name: 'Valery',
                avatar: 'https://avatars.mds.yandex.net/i?id=f6f9f12c47f70e5ba9a3eceb7a678123_l-5234254-images-thumbs&n=13',
                massagesData: [
                    {id: 1, massage: 'Hello, Valery', author: 'Dima'},
                ]
            },
            {
                id: 5,
                name: 'Nikolay',
                avatar: 'https://twitchinfo.ru/wp-content/uploads/2020/08/%D0%9A%D0%B0%D0%BA-%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BF%D0%BE-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B8-%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D1%83-%D0%B4%D0%BB%D1%8F-Youtube-VK-INSTAGRAMM-TIKTOK-TWITCH-0-12-03-920-1024x576.jpg',
                massagesData: [
                    {id: 1, massage: 'Hello, Nikolay', author: 'Dima'},
                ]
            },
            {
                id: 6,
                name: 'Pavel',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJocHpY6Jzj9xHddXMTNeq753_Mbqc9XbxA&s',
                massagesData: [
                    {id: 1, massage: 'Hello, Pavel', author: 'Dima'},
                ]
            }
        ],
    },
    profile: {
        postsData: [
            {id: 1, massage: 'Hi? how are you?', likesCount: 12},
            {id: 2, massage: "It's my first post!", likesCount: 3},
            {id: 3, massage: "Гип-гип, ура!", likesCount: 0},
            {id: 4, massage: "Хочу на страйкбол", likesCount: 0},
            {id: 5, massage: "Хус... ро... да!", likesCount: 2},
        ]
    },
    sidebar: {
        navigation: [
            {id: 1, pageName: 'Profile'},
            {id: 1, pageName: 'Dialogs'},
            {id: 1, pageName: 'News'},
            {id: 1, pageName: 'Music'},
            {id: 1, pageName: 'Settings'}
        ],
        bestFriends: [
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
        newMassages: [
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
}

export let addPost = (postMassage: string) => {

    let newPost = {
        id: 6,
        massage: postMassage,
        likesCount: 0,
    };
    state.profile.postsData.push(newPost);
    renderApp(state, addPost)
};


export default state