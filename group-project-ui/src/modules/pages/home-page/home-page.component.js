import { useState, useEffect } from 'react';
import HackerNewsStories from './HackerNewsStories';
import SearchBar from './search-bar.component';
import Data from './Data.json';

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
    </div>
    </>
  )
}

export default HackerNewsStoriesWithSearch;