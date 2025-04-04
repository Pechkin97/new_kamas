let state = {
    massages: {
        dialogsData: [
            {id: 1, name: 'Peter'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Jack'},
            {id: 4, name: 'Valery'},
            {id: 5, name: 'Nikolay'},
            {id: 6, name: 'Pavel'}
        ], massagesData: [
            {id: 1, massage: 'Hello'},
            {id: 2, massage: 'I am learning React NOW!'},
            {id: 3, massage: 'So good'},
            {id: 4, massage: 'Be happy )'}
        ]
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
            {id: 1, pageName: 'profile'},
            {id: 1, pageName: 'dialogs'},
            {id: 1, pageName: 'news'},
            {id: 1, pageName: 'music'},
            {id: 1, pageName: 'settings'}
        ],
        bestFriends: [
            {id: 1, userName: 'Petr', userAvatar: 'https://avatars.mds.yandex.net/i?id=f6f9f12c47f70e5ba9a3eceb7a678123_l-5234254-images-thumbs&n=13'},
            {id: 2, userName: 'Valery', userAvatar: 'https://intrigue.dating/wp-content/uploads/2019/03/1147539-download-women-faces-wallpaper-1920x1080-for-iphone-5s.jpg'},
            {id: 3, userName: 'Jack', userAvatar: 'https://i.pinimg.com/736x/78/a9/6c/78a96ccbedfa350d341add48931f94ea.jpg'},
        ],
        newMassages: [
            {id: 1, userName: 'Valery', userAvatar: 'https://intrigue.dating/wp-content/uploads/2019/03/1147539-download-women-faces-wallpaper-1920x1080-for-iphone-5s.jpg', massagesCount: 4},
            {id: 1, userName: 'Petr', userAvatar: 'https://avatars.mds.yandex.net/i?id=f6f9f12c47f70e5ba9a3eceb7a678123_l-5234254-images-thumbs&n=13', massagesCount: 2},
        ]
    }
}

export default state