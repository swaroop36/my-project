import './CSS/Todoitems.css';
import tick from './Assets/tick.png';
import cross from './Assets/cross.png';
import no_tick from './Assets/no_tick.png';

const Todoitems = ({no,display,text}) => {
    return (
        <div className='todoitems'>
            <div className='todoitems-container'>
                <img src={no_tick} alt='checked' />
                <img src={tick} alt='checked' />
                <div className='todoitems-text'>{text}</div>
            </div>
            <img src={cross} alt='cross' />
        </div>
    );
}

export default Todoitems;
