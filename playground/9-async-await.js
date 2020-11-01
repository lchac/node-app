const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative')
            }
            resolve(a + b)
        }, 2000);
    })
}

const doWork = async () => {
    //return 'Andrew'
    //throw new Error('EERRRRRORRRR')

    const sum = await add(1, 99)
    const sum2 = await add(sum, 50)
    const sum3 = await add(sum2, -3)
    return sum3
}

doWork().then((v) => console.log(v)).catch(e => console.log(e))