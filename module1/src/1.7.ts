

// object destructuring

const user = {
    firstName: 'Monster',
    middleName: 'Esp',
    lastName: 'back',
    hobby: {
        fishing: 'daily',
        cycling: 'monday'
    },

};

const { firstName, hobby: { fishing } } = user;


// array destructuring

const myFriends = ['dudala', 'ca ala', 'doi ala ', 'bici ala', 'monica', 'rassule domingo', 'haturi khankir put']
const [, , doi, ...rest] = myFriends