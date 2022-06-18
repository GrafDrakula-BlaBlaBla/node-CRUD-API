// import model from './model.js'



export const getAllUsers = async(req, res) => {
    try{
        console.log('getAllUsers')
        // const users = await findAllUsers
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({"message":"Route is getAllUsers"}))
    } catch (err) {

    }
}

export const getUserById = async (req, res) => {
    try {
        console.log('getUserById')
        // const user = await findUserById
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({"message": "ROUTE is getUserById"}))
    } catch(err) {

    }
}

export const createUser = async (req, res) => {
    try {
        console.log('createUser')
        // const newUser = await createNewUser
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify({"message": "ROUTE is createUser"}))
    } catch(err) {

    }
}

export const updateUser = async (req, res) => {
    try {
        console.log('updateUser')
        // const newUser = await updateUser
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({"message": "ROUTE is updateUser"}))
    } catch(err) {

    }
}

export const deleteUser = async (req, res) => {
    try {
        console.log('deleteUser')
        // const deleteUser = await delUser
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({"message": "ROUTE is deleteUser"}))
    } catch(err) {
        
    }
}

