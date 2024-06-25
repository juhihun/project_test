import axios from 'axios';

export default {
    methods : {
        async $set(url, data){
            return (await axios ({
                method : 'post',
                url,
                data
            }).catch(e => {
                console.log(e);
            })).data;
        },
        async $get(url, data = ''){
            console.log(data);
            return (await axios(`${url}/${data}`)
                    .catch(e=> {
                        console.log(e);
                    })).data;
        },
        $dateFormat(val){
            let date = val == '' ? new Date() : new Date(val);
            let year = date.getFullYear();
            let month = ('0' + (date.getMonth() + 1)).slice(-2);
            let day = ('0' + date.getDate()).slice(-2);

            return `${year}-${month}-${day}`;
        }
    }
}