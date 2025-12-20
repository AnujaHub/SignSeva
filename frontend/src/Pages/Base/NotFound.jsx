import { Link } from 'react-router-dom';

function NotFound() {


  return (
    <>
  <div className="main-container">
       <Link to="/">
        <button>Go Back</button>
      </Link>
      </div>
    </>
  )
}

export default NotFound;
