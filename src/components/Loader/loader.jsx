import './Loader.css';
import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Loader.css';

function loader() {
    return (
        <div className='divPadre'>
            <div className='divHijo'>
                <Spinner color='primary'/>
            </div>
        </div>
    )
}

export default loader