
import { v4 as uuidv4 } from 'uuid';
let users = [
    {
        "id": "cc966e19-83c3-411c-ac3d-ca58d24b9064",
        "firstName": "John",
        "lastName": "Doe",
        "age": 32
    },
    {
        "id": "aff453f7-0911-4fa7-967a-0ceca13d6f9c",
        "firstName": "Farzin",
        "lastName": "Jabbary",
        "age": 21
    },
    {
        "id": "63596c90-0893-418d-bab7-d8addd21cf75",
        "firstName": "TestFN",
        "lastName": "TestLN",
        "age": 21
    }
]

export const getUsers = (req, res) => {
    res.json(users)
};

export const addUser = (req, res) => {
    const newUser = { id: uuidv4(), ...req.body }
    users = [...users, newUser]
    res.send('New user added to database')
}

export const getOneUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find(user => user.id === id);

    res.send(foundUser)
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    const filteredArr = users.filter(user => user.id !== id)

    users = filteredArr;
    res.send(`User with the id of ${id} was deleted`)
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const updatedUsers = users.map(user => {
        if (user.id === id && firstName) {
            user.firstName = firstName;
        }
        if (user.id === id && lastName) {
            user.lastName = lastName;
        }
        if (user.id === id && age) {
            user.age = age;
        }

        return user;
    })

    users = updatedUsers;
    res.send('User updated')
}