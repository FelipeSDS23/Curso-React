import { useState, useEffect } from "react";

// 4 - custon hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // 5 - refatorando post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    // 6 - loading
    const [loading, setLoading] = useState(false);

    // 7 - tratando erros
    const [error, setError] = useState(null)

    // cria url com o id para fazer o delete
    const [deleteUrl, setDeleteUrl] = useState("");

    const createDeleteUrl = (id) => {
        setDeleteUrl(url + "/" + id.toString()); 
    }


    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            });

            setMethod(method);
        }
        if (method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                }
            });

            setMethod(method);
        }
    };

    useEffect(() => {

        const fetchData = async () => {

            // 6 - loading
            setLoading(true)

            try {
                const res = await fetch(url);

                const json = await res.json();

                setData(json);
            } catch (error) {
                console.log(error.message)

                setError("Houve algum erro ao carregar os dados!")
            }

            setLoading(false)
        }

        fetchData();
    }, [url, callFetch]);

    // 5 - refatorando post
    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST") {    
                let fetchOptions = [url, config];
    
                const res = await fetch(...fetchOptions);
    
                const json = await res.json();
    
                setCallFetch(json);
            } 

            if (method === "DELETE") {    
                let fetchOptions = [deleteUrl, config];
    
                const res = await fetch(...fetchOptions);
    
                const json = await res.json();
    
                setCallFetch(json);
            } 
        };

        httpRequest();
    }, [config, method, url, deleteUrl]);

    return { data, httpConfig, loading, error, createDeleteUrl };
};
