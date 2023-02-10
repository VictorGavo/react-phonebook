import React, { useState, useEffect } from 'react';
import { server_calls } from '../api'

export const useGetData = () => {
    // Syntax: const [stateName, saveStateFunction] = importedHook<requiredDataType>(value passed in);
    const [contactData, setData] = useState<[]>([]);
    console.log(contactData)

    async function handleDataFetch(){
        try {
            const result = await server_calls.get();
            console.log(` Lookie Here! -->>${result}`)
            setData(result)
        } catch (error) {
            console.error(error);
        }
        // const result = await server_calls.get();
        // console.log(`Data from API: ${result}`)
        // setData(result)
    }

    // This is the actual call of the funciton handleDataFetch,
    // where the data is actually acquired
    useEffect(() => {
        handleDataFetch();
        console.log(`Data in state: ${contactData}`)

    }, [contactData]);

        // We return the data that we've saved
        return {contactData, getData:handleDataFetch}
}