const baseUrl:string = 'https://jsonplaceholder.typicode.com'

const urls ={
    users: {
        allUsers: 'users',
        byId:(id:string):string => `${urls.users.allUsers}${id}`
    },
    posts: {
        allPosts: 'posts',
    },
    comments: {
        allComments: 'comments'
    }
}
export {
    baseUrl,
    urls
}