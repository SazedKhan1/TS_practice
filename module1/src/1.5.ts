


// normal function 
function add(num1: number, num2: number) {
    return num1 + num2
}

// arrow function 
const addArrow = (num1: number, num2: number) => num1 + num2

// object --> method

const goribUser = {
    name: 'sazed',
    balance: 0,
    addBalance(balance: number): string {
        return `this is my new balance ${this.balance + balance}`;
    }
}


const ages: number[] = [11, 2, 12, 45]

const newAges: number[] = ages.map((age: number): number => age * age)