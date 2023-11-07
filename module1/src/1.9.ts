{
    // 
    const age: number = 20
    if (age >= 15) {
        // console.log("adult")
    }
    else {
        // console.log("Choto bacca")
    }

    // difference between ? and ?? 

    const isAuthenticated = ''
    const result1 = isAuthenticated ?? "Adult"
    const result2 = isAuthenticated ? isAuthenticated : "Adult"
    // console.log({ result1 }, { result2 })

    type User = {
        name: string,
        phoneNumber: number
        address: {
            city: string,
            road: string,
            parmanentAddress?: string,
            currentAdress: string,
        }
    }

    const user: User = {
        name: 'Sazed',
        phoneNumber: +14545645645646,
        address: {
            city: 'nk',
            road: 'Maijdi',
            currentAdress: 'Hospital Road maijdi noakhali',


        }

    }
    const parmanentAddress = user?.address?.parmanentAddress ?? 'no address is here'
    console.log({ parmanentAddress })




























    // 
}

