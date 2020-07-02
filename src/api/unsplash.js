import axios from 'axios'

// const searchImages = (term) =>

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID cdM_wr4NSRN_b4vuOHmH8sm6KRYE3tdF182k3Zf-vi0'
    }
});

