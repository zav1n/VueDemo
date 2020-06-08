(function(Vue, axios) {
    const Axios = axios.create({
        baseURL: 'https://apimusic.linweiqin.com/',
        timeout: 1000,
        //自定义请求头
        // headers: {
        //     "x":dd 
        // }
    })

    //添加请求拦截
    axios.interceptors.request.use(function(config) {
        // Do something before request is sent
        return config;
    }, function(error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use(function(response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function(error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });

    window.Axios = Axios
})(axios)