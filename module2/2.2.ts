{
    // interface in object 

    type User1 = {
        name: string,
        roll: number

    }

    interface User2 {
        name: string,
        roll: number
    }

    const user1: User1 = {
        name: 'Sazed Khan',
        roll: 478083,
    }
    const user2: User2 = {
        name: 'Antuo',
        roll: 4545454,
    }

    type UserWithRole1 = User1 & { role: string }

    interface UserWithRole2 extends User1 {
        role: string
    }

    const userWithRole1: UserWithRole1 = {
        name: 'Kopila Kopi',
        roll: 12121,
        role: "Modaretor"
    }
    const userWithRole2: UserWithRole2 = {
        name: 'Jesika Sabnam',
        role: 'Editor',
        roll: 45454,
    }


    type Roll1 = number[];

    interface Roll2 {
        [index: number]: number
    }
    const rollNumber1: Roll2 = [1, 2, 3]



    type Add1 = (num1: number, num2: number) => number

    interface Add2 {
        (num1: number, num2: number): number
    }

    const add: Add2 = (num1, num2) => num1 + num2




















    // 
}