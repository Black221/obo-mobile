import {useEffect, useState} from "react";


const useAxiosFunction = () => {

    const [response, setResponse] = useState<any>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [controller, setController] = useState<AbortController>();


    const axiosFetch = async (configObj: {
        axiosInstance: any;
        method: string;
        url: string;
        requestConfig?: any[];
    }) : Promise<any> => {

        setLoading(true);

        const ctrl = new AbortController();
        setController(ctrl);

        const {
            axiosInstance,
            method,
            url,
            requestConfig = []
        } = configObj;


        await  axiosInstance[method.toLowerCase()](url,
            ...requestConfig
        ).then((res: any) => {
            setResponse(res.data);
        }).catch((err: any) => {
            console.log(err);
            setError(err?.response?.data || "Error Server");
        }).finally (() => {
            setLoading(false);
        })
    }

    useEffect(() => {

        //useEffect cleanup function
        if (controller)
            return () => controller.abort()
    }, [controller])

    return [response, error, loading, axiosFetch];
}

export default useAxiosFunction;