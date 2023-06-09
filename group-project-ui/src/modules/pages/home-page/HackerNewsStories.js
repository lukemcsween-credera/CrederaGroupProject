import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';


const HackerNewsStories = ({stories = []}) => {

  const history = useHistory();
  
  const routeChange = (id) =>{ 

    for (const story in stories) {
      if (story.id == id) {
        let path = `/Display`; 
        const storyname = story.itemName
        history.push(path, {params: storyname});
      }
    }
  }


  return (
    <div className="stories-wrapper">
      {stories &&
        stories.map(({ id, itemName, description, basePrice}) => (
          <div className='stories-list' key={id}>
            {itemName} - <b>{description}</b> (${basePrice}ea)
            <Button onclick={routeChange(id)}>See Details</Button>
          </div>
        ))}
    </div>
  );
};

export default HackerNewsStories;