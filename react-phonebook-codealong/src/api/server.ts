let token = '17b1b4cb64a5335402ffd952893a4227d9c1f04fa24c3e77';

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://aquamarine-celestial-axolotl.glitch.me/api/contacts`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch(`https://aquamarine-celestial-axolotl.glitch.me/api/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://aquamarine-celestial-axolotl.glitch.me/api/contacts/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },
    delete: async (id:string) => {
        const response = await fetch(`https://aquamarine-celestial-axolotl.glitch.me/api/contacts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}