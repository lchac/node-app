const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([1, 2, 3])
        reject('My Error')
    }, 2000);
})

doWorkPromise
    .then((result) => {
        console.log("result", result)

    }).catch((error) => {
        console.log("error", error)

    })
