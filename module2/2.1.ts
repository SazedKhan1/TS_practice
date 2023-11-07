

//  type agarstion 

const gmToKG = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
        const convertedValue = (parseFloat(value) * 1000)
        return `This is the amount ${convertedValue}`
    }
    if (typeof value === "number") {
        return value * 1000
    }
}

const result1 = gmToKG(1000) as number
const result2 = gmToKG("1000") as string