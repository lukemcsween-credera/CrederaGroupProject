import { useState, useEffect } from 'react';
import HackerNewsStories from './HackerNewsStories';
import SearchBar from './search-bar.component';
import Data from './Data.json';
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';

export const HackerNewsStoriesWithSearch = () => {
  const [stories, setStories] = useState([]);
  const [allStories, setAllStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState('');

    const fetchStories = async () => {
        try {
          const data = Data;
          const stortedSauces = data.HotSauce.sort((story, nextStory) => (story.points < nextStory.points ? 1 : -1));
          console.log(stortedSauces)
          //setAllStories(data);
          //setStories(data);
          setAllStories(stortedSauces);
          setStories(stortedSauces);
          setError(null);
          console.log(data);
        } catch (err) {
          setError(err.message);
          setStories(null);
        } finally {
          setLoading(false);
        }
      };

      const history = useHistory();
  
      const routeChange = () =>{ 
        let path = `/Display`; 
        history.push(path);
      }

  const updateKeyword = (keyword) => {
    const filtered = allStories.filter(story => {
     return `${story.itemName.toLowerCase()} ${story.description.toLowerCase()}`.includes(keyword.toLowerCase());
    })
    setKeyword(keyword);
    setStories(filtered);
 }

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <> { /* React fragment */}
    <div className="wrapper">
      <h2>Sauces: </h2>
      {loading && <div>Sauces loading...</div>}
      {error && <div>{`Problem fetching Sauces - ${error}`}</div>}
      <SearchBar keyword={keyword} onChange={updateKeyword}/>
      <HackerNewsStories stories={stories} />


      <h1>Bronance Holdings Hot Sauces</h1>
      <div>
        
      <Button color="primary" className="px-4"
                onClick={routeChange}
                  >
                  Show me da sauce
                </Button>
      </div>
    </div>
    </>
  )
}

export default HackerNewsStoriesWithSearch;