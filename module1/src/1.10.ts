{
    // 

    const searchName = (value: string | null) => {
        if (value) {
            console.log('Searching')
        }
        else {
            console.log('Nothing to search ')
        }
    }

    searchName(null)



    // unknown type
    const speedInMeter = (value: unknown) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`This car has ${convertedSpeed} ms^-1 speed`)
        }
        else if (typeof value === "string") {
            const [result, unit] = value.split(' ')
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`This gari has ${convertedSpeed} ms^-1`)
        }
        else {
            console.log("wrong input dichen")
        }
    }

    speedInMeter(null)














    // 
}