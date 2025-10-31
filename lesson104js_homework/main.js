// 1 =====================================

const myDescription = {
    name: `Ivan`,
    age: 20,
    university: `Tyumen State University`,
    course: `3rd`
} 

console.warn(`First result ->`)
console.log(myDescription)

// 2 ======================================

let objectMethod = {
    name: `function`,
    hello(name) {
        return `Hello ` + name
    }
}

console.warn(`Second result ->`)
console.log(objectMethod.hello(`Ivan`))

// 3 =======================================

let notAdmins = 0
let users = [
    {
        name: `Ivan`,
        age: 20,
        isAdmin: 1,
    },
    {
        name: `Sergey`,
        age: 22,
        isAdmin: 0,
    },
    {
        name: `Maria`,
        age: 5,
        isAdmin: 0,
    },
    {
        name: `Andrey`,
        age: 6,
        isAdmin: 0,
    }
]

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === 0) {
        users[i].isAdmin++
        notAdmins++
    }
}

console.warn(`Third result ->`)
console.log(`Not admins: ${notAdmins} users.`)
console.log(users)