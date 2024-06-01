const baseUrl:string = 'https://jsonplaceholder.typicode.com/';

const urls = {
    users:{
        allUsers:'/users',
        byId: (id:string) => `${urls.users.allUsers}/${id}`
    }

}

export{
    baseUrl,
    urls
}