const urlApi = 'http://localhost:8000'

export const api = {
    register: async (formData) => {
        const response = await fetch(`${urlApi}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({formData})
        })

        return await response.json();
    },
    login: async (formData) => {
        const response = await fetch(`${urlApi}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({formData})
        })
        return await response.json();
    },
    getTodos: async (accessToken) => {
        const response = await fetch(`${urlApi}/todos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken
            },
        })
        return await response.json();
    },
    addTodo: async (name, accessToken) => {
        const response = await fetch(`${urlApi}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken
            },
            body: JSON.stringify({
                name: name
            })
        })
        return await response.json();
    },
    deleteTodo: async (id, accessToken) => {
        const response = await fetch(`${urlApi}/todos`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken
            },
            body: JSON.stringify({
                id
            })
        })
        return await response.json();
    },
    refreshToken: async (refreshToken) => {
        const response = await fetch(`${urlApi}/refreshToken`, {
            method: 'POST',
            body: JSON.stringify({
                refreshToken: refreshToken
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return await response.json();
    }
}
