import { useState } from "react";

const useFetchAPI = (url) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    async function fetchData() {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setState({
                data: json,
                loading: false,
                error: null
            })
        } catch (error) {
            setState({
                data: null,
                loading: false,
                error: error
            })
        }
    }

    async function sendData(data) {
        setState({
            ...state,
            loading: true,
        })
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            console.log(json);
            setState({
                data: json,
                loading: false,
                error: null
            })
        } catch (error) {
            setState({
                data: null,
                loading: false,
                error: error
            })
        }
    }

    return { state, fetchData, sendData }
}

export default useFetchAPI;