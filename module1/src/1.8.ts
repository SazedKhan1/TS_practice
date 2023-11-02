
//  type alias 
type Player = {
    name: string,
    age: number,
    contactnumber?: number,
    address: string,

}
const player1: Player = {
    name: 'monster',
    age: 15,
    contactnumber: +1454545545,
    address: 'FreeFire'
}

const player2: Player = {
    name: 'koya miya',
    age: 35,
    address: 'Bermuda'
}
const player3: Player = {
    name: 'Dud ala',
    age: 54,
    address: 'Duder bari'
}

type UserName = string;
type IsAdmin = boolean;

const userName: UserName = 'Sazed Khan '
const isAdmin: IsAdmin = true

type Add = (num1: number, num2: number) => number
const addme: Add = (num1, num2) => num1 + num2;

const addKoyaMiya: Add = (koya1, koya2) => koya1 + koya2