let user1 = {username: "A",
             email: "user1@.com",
             role: "user1"
            }
let user2 = {username: "B",
            email: "user2@.com",
            role: "user2"
           }
let mergeduser = Object.assign({},user1, user2)
console.log(mergeduser);