import About from '../pages/About'
import Posts from '../pages/Posts'
import Comments from '../pages/Comments'
import Main from '../pages/Main'

export const privateRoutes = [
   { path: "/about", component: About, exact: true },
   { path: "/posts", component: Posts, exact: true },
   { path: "/posts/:id", component: Comments, exact: true },
]


export const publicRoutes = [
   { path: "/main", component: Main, exact: true },
]