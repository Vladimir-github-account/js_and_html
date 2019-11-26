'use strict';

const SOCIAL_NETWORKS = Object.freeze({
    FACEBOOK: "FACEBOOK",
    TWITTER: "TWITTER",
    GOOGLE_PLUS: "GOOGLE_PLUS",
    SKYPE: "SKYPE",
});

const users = [
    {
        id: 1,
        name: "Username",
        surname: "Usersurname",
        description: "Text text Text text Text text Text text Text text Text text ",
        imageSrc: null,
        links:
            [
                {
                    name: SOCIAL_NETWORKS.FACEBOOK,
                    href: ""
                },
                {
                    name: SOCIAL_NETWORKS.TWITTER,
                    href: ""
                },
                {
                    name: SOCIAL_NETWORKS.SKYPE,
                    href: ""
                },
            ]
    },
    {
        id: 2,
        name: "Username",
        surname: "Usersurname",
        description: "Text text Text text Text text Text text Text text Text text ",
        imageSrc: "https://24smi.org/public/media/celebrity/2019/01/29/eblteapobq9j-stas-mikhailov.jpg",
        links:
            [
                {
                    name: SOCIAL_NETWORKS.FACEBOOK,
                    href: ""
                },
                {
                    name: SOCIAL_NETWORKS.TWITTER,
                    href: ""
                },
                {
                    name: SOCIAL_NETWORKS.SKYPE,
                    href: ""
                },
            ]
    },
    {
        id: 3,
        name: "Username",
        surname: "Usersurname",
        description: "Text text Text text Text text Text text Text text Text text ",
        imageSrc: "https://24smi.org/public/media/celebrity/2019/01/29/eblteapobq9j-stas-mikhailov.jpg",
        links:
            [
                {
                    name: SOCIAL_NETWORKS.FACEBOOK,
                    href: ""
                },
                {
                    name: SOCIAL_NETWORKS.TWITTER,
                    href: ""
                },
                {
                    name: SOCIAL_NETWORKS.SKYPE,
                    href: ""
                },
            ]
    },
    {
        id: 4,
        name: "Username",
        surname: "Usersurname",
        description: "Text text Text text Text text Text text Text text Text text ",
        imageSrc: "https://24smi.org/public/media/celebrity/2019/01/29/eblteapobq9j-stas-mikhailov.jpg",
        links:
            [
                {
                    name: SOCIAL_NETWORKS.FACEBOOK,
                    href: ""
                },
                {
                    name: SOCIAL_NETWORKS.TWITTER,
                    href: ""
                },
                {
                    name: SOCIAL_NETWORKS.SKYPE,
                    href: ""
                },
            ]
    },
    {
        id: 5,
        name: "Username",
        surname: "Usersurname",
        description: "Text text Text text Text text Text text Text text Text text ",
        imageSrc: "https://24smi.org/public/media/celebrity/2019/01/29/eblteapobq9j-stas-mikhailov.jpg",
        links:
            [
                {
                    name: SOCIAL_NETWORKS.FACEBOOK,
                    href: ""
                },
                {
                    name: SOCIAL_NETWORKS.TWITTER,
                    href: ""
                },
                {
                    name: SOCIAL_NETWORKS.SKYPE,
                    href: ""
                },
            ]
    },{
        id: 6,
        name: "Username",
        surname: "Usersurname",
        description: "Text text Text text Text text Text text Text text Text text ",
        imageSrc: "https://24smi.org/public/media/celebrity/2019/01/29/eblteapobq9j-stas-mikhailov.jpg",
        links:
            [
                {
                    name: SOCIAL_NETWORKS.FACEBOOK,
                    href: ""
                },
                {
                    name: SOCIAL_NETWORKS.TWITTER,
                    href: ""
                },
                {
                    name: SOCIAL_NETWORKS.SKYPE,
                    href: ""
                },
            ]
    },{
        id: 7,
        name: "Username",
        surname: "Usersurname",
        description: "Text text Text text Text text Text text Text text Text text ",
        imageSrc: "https://24smi.org/public/media/celebrity/2019/01/29/eblteapobq9j-stas-mikhailov.jpg",
        links:
            [
                {
                    name: SOCIAL_NETWORKS.FACEBOOK,
                    href: ""
                },
                {
                    name: SOCIAL_NETWORKS.TWITTER,
                    href: ""
                },
                {
                    name: SOCIAL_NETWORKS.SKYPE,
                    href: ""
                },
            ]
    },{
        id: 8,
        name: "Username",
        surname: "Usersurname",
        description: "Text text Text text Text text Text text Text text Text text ",
        imageSrc: "https://24smi.org/public/media/celebrity/2019/01/29/eblteapobq9j-stas-mikhailov.jpg",
        links:
            [
                {
                    name: SOCIAL_NETWORKS.FACEBOOK,
                    href: ""
                },
                {
                    name: SOCIAL_NETWORKS.TWITTER,
                    href: ""
                },
                {
                    name: SOCIAL_NETWORKS.SKYPE,
                    href: ""
                },
            ]
    }

];

const cardsContainer = document.getElementById("cardsContainer");
users.forEach(
    (user) => {
        cardsContainer.append(getUserListElem(user));
    }
);

function getUserImageElem({imageSrc}) {
    const userImageContainerElem = document.createElement('div');
    userImageContainerElem.classList.add("userImageContainer");
    const userImageElem = document.createElement("img");
    userImageElem.classList.add('userImage');
    userImageElem.setAttribute("src", imageSrc ? imageSrc : "./assets/img/icons/standart_profile.png");
    userImageElem.setAttribute("alt", 'user picture');
    userImageContainerElem.append(userImageElem);
    return userImageContainerElem;
}
function getUserFullNameElem({name, surname}) {
    const userFullNameElem = document.createElement('div');
    userFullNameElem.innerText = `${name} ${surname}`;
    return userFullNameElem;
}
function getUserListElem(user) {
    const userListItemElem = document.createElement("div");
    userListItemElem.append(getUserCardElem(user));
    return userListItemElem;
}

function getUserDescription({description}) {
    const userDescriptionItem = document.createElement("p");
    userDescriptionItem.innerText = `${description}`;
    return userDescriptionItem;
}

function getUserContactsContainer(user) {
    const userContactsContainerItem = document.createElement("div");

}

function getUserCardElem(user) {
    const userCardWrapperElem = document.createElement('div');
    userCardWrapperElem.classList.add("userCardWrapper");
    userCardWrapperElem.append(getUserImageElem(user));
    userCardWrapperElem.append(getUserFullNameElem(user));

    userCardWrapperElem.append(getUserDescription(user));
    // userCardWrapperElem.append(getUserContactsContainer(user));
    return userCardWrapperElem;
}




