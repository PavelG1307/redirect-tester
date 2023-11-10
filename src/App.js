import ItemsGroup from './components/ItemsGroup/ItemsGroup';
import { parseHash, parseQuery } from './utils/parser';
import './App.css'
import { FRAGMENT_GROUP_TITLE, QUERY_GROUP_TITLE } from './constants/labels';
import Placeholder from './components/Placeholder/Placeholder';
import Hint from './components/Hint/Hint';

function App() {
  const hash = window.location.hash
  const query = window.location.search

  const parsedHash = parseHash(hash)
  const parsedQuery = parseQuery(query)

  return (
    <div className="App">
      <div className="title">Callback tester</div>
      {
        !parsedQuery.length && !parsedHash.length
        ? <Placeholder />
        : <Hint/>
      }
      {
        parsedQuery.length
          ? <ItemsGroup
              title={QUERY_GROUP_TITLE}
              items={parsedQuery}
            />
          : null
      }
      {
        parsedHash.length
          ? <ItemsGroup
            title={FRAGMENT_GROUP_TITLE}
            items={parsedHash}
          />
          : null
      }
    </div>
  );
}

export default App;
