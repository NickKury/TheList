import CreateListForm from "../UserPage/CreateListForm"
import AllLists from "./AllLists"
import AllMovies from "./AllMovies"
import UserFollowList from "../UserPage/UserFollowList"
import { useSelector } from "react-redux";
import './HomePage.css'

const HomePage = () => {
    const {user} = useSelector(state => (state.session));
    console.log('user from home page', user)


    return(
        <div className='home-page'>
        <h2>Home Page!!</h2>
        <div className='create-list'>
            <CreateListForm/>
        </div>
        
            <div classname='all-lists'>
                All Lists
                <AllLists/>
            </div>
            <div className='movie-list'>
                Movie List
                <AllMovies/>
            </div>
            <div className='friends-list'>
                {`${user?.username} Follows`}
                <UserFollowList id={user?.id}/>
            </div>
            <div className='search-bar'> 
                Search
            </div>
        </div>
    )
}
export default HomePage;
