// const square = function (x) {
//     return x * x
// }
// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(3))

const party = {
    name: 'B Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(this.name, "printGuestList -> guest", guest)

        })
    }
    // printGuestList: () => {
    //     console.log('Guest list for ' + this.name)
    // }
    // printGuestList: function () {
    //     console.log('Guest list for ' + this.name)
    // }
}

party.printGuestList()