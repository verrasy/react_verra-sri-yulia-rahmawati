import './Index.css';
import notFound from '../assets/notFound.jpg';


function NotFound() {
  return (
      <>
        <div className='box'>
            <img src={notFound} alt="img" className='img-responsive'/>
        </div>
    </>
  );
}

export default NotFound;