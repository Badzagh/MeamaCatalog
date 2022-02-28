import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => (
    <div className='not-found'>
        <h3>ოპააა...</h3>
        <p>გვერდი ვერ მოიძებნა</p>
        <Link to="/">მთავარზე დაბრუნება</Link>
    </div>
);

export default NotFound;