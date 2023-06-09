
const HackerNewsStories = ({stories = []}) => {
  return (
    <div className="stories-wrapper">
      {stories &&
        stories.map(({ id, itemName, description, basePrice}) => (
          <div className='stories-list' key={id}>
            {itemName} - <b>{description}</b> (${basePrice}ea)
          </div>
        ))}
    </div>
  );
};

export default HackerNewsStories;