import Posts from './Posts';
import Stories from './Stories';
import Sidebar from './Sidebar'

function Body() {
  return (
    <div className="corpo">
      <div className="esquerda">
        <Stories />
        <Posts />
      </div>
      <Sidebar />
    </div>
  );
}

export default Body;