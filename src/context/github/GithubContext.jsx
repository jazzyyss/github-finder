import { useReducer, createContext } from "react"
import githubReducer from "./GithubReducer"

const GithubContext = createContext() 

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

export const GithubProvider = ({children}) =>{
    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    //set loading
    const setLoading = () => dispatch({type: 'SET_LOADING'})

    //remove users
    const removeUsers = () => dispatch({type: 'CLEAR_USERS'})

    //search users
    const searchUsers = async (text) =>{
        setLoading()

        const params = new URLSearchParams({q: text})
        const res = await fetch(`${GITHUB_URL}/search/users?${params}`,{
          headers:{
            Authorization: `token ${GITHUB_TOKEN}`
          }})
    
          const {items} = await res.json()

          dispatch({
            type: 'GET_USERS',
            payload: items
        })
      }

      return <GithubContext.Provider value={{
        users : state.users,
        loading: state.loading,
        searchUsers,
        removeUsers
      }}>
        {children}
      </GithubContext.Provider>
}


export default GithubContext