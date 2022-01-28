import axios from "axios"

export let create_api = settings => {

    const api = axios.create()

    api.interceptors.request.use( config => {
        /* 
            we're intercepting the url and passing it in as a data attr 
            so our backend filter can use it.
        */
        let  { requestInterceptor = o => o } = config.data 
        /* 
            requestInterceptor is an overrideable call back
            that allows you to intercept and modify any of the requests info before it's sent.
        */
        const { endpoint, nonce } = settings.api
        //config.data.endpoint = config.url
        return requestInterceptor({
            ...config,
            data: {
                ...config.data,
                endpoint: config.url
            },
            url: endpoint, 
            headers: {
                'X-WP-Nonce': nonce,
            },
            timeout: 30000
        } )

    } )

    /* 
        Bit of magic here to just pass back the data from the response. 
        Saves us having to do it everywhere we need to make calls. 
    */

    api.interceptors.response.use( r => r.data, e => Promise.reject(e) )

    return api

}

let api = create_api(pockets)

let post = (...args) => api.post( ...args )

export { post }