import { useNavigate } from 'react-router-dom';
import './menu-item.scss';

const MenuItem = (props) => {
    const navigate = useNavigate();
    function handleClick(linkUrl) {
        console.log("link", linkUrl);
        navigate( linkUrl )
    }
    return(
    <div className={`${props.section.size} menu-item`} onClick={() => handleClick(`${props.section.linkUrl}`)} >
             <div className='background-image' 
             style={{
                backgroundImage : `url(${props.section.imageUrl})`
                }}
                />
            <div className='content'>
                <h1 className='title'>{props.section.title.toUpperCase()}</h1>
                <span className='subtitle'>{props.subtitle}</span>
            </div>

        </div>
    )

};

export default MenuItem;