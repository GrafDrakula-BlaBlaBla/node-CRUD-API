import {getAllUsers, getUserById, createUser, updateUser, deleteUser} from './controller.js'


export const routes = (route, req, res) => {
    if(route === route.match(/users/)[0] && req.method === 'GET') {
        getAllUsers(req, res)
    } else if(route.match(/users\/\w+/) && req.method === 'GET') {
        getUserById(req, res)
    } else if(route === route.match(/users/)[0] && req.method === 'POST') {
        createUser(req, res)
    } else if(route.match(/users\/\w+/) && req.method === 'PUT') {
        updateUser(req, res)
    } else if(route.match(/users\/\w+/) && req.method === 'DELETE') {
        deleteUser(req, res)
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route Not Found' }))
    }

}


