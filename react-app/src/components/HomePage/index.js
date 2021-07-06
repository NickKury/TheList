import CreateListForm from "../UserPage/CreateListForm"
import AllLists from "./AllLists"
import AllMovies from "./AllMovies"
import './HomePage.css'

const HomePage = () => {


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
                Friends
            </div>
            <div className='search-bar'> 
                Search
            </div>
        </div>
    )
}
export default HomePage;
