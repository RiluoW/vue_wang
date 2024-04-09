// import axios from 'axios'

// function httpfilmlist(id) {
//     return  axios({
//         url:`https://m.maizuo.com/gateway?filmId=${id}&k=6187388`,
//         headers:{
//             'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"1710409259476745664823297","bc":"110100"}',
//             'X-Host':'mall.film-ticket.film.info'
//         }
//     })
// }
// function httpnowplay(){
//     return   axios({
          
//         url:' https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=2843238',
//         headers:{
//            ' X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"1710409259476745664823297","bc":"110100"}',
//            ' X-Host':'mall.film-ticket.film.list'
//         }
//     })
// }

// export default {
//     httpfilmlist,
//     httpnowplay
// }

import axios from 'axios'
const http = axios.create({
    baseURL:'https://m.maizuo.com',
    timeout:10000,
    headers:{
        ' X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"1710409259476745664823297","bc":"110100"}'
    }
})

export default http
