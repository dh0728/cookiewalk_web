import react, {useEffect} from 'react';
import {Container as MapDiv, NaverMap, Marker, useNavermaps} from 'react-naver-maps'
import './BeforeStart.css'
import { Link } from "react-router-dom";

function MyMap(){
    const navermaps = useNavermaps();
    return(
    <NaverMap defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}  defaultZoom={15}><Marker defaultPosition={new navermaps.LatLng(37.3595704, 127.105399)}/>
    </NaverMap>
    )
}
export default function BeforeStart(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div className="BeforeStart_container">
            <div><img className='e118_437' src="./icon/arrow.svg"/></div>
            <div><img className='e118_439' src="./icon/setting.svg"/></div>
            
            <MapDiv style={{width: '100%',height: '490px',}}><MyMap /></MapDiv>
            {/* 지도 넣는 곳 */}
            {/* <div><img className="e118_427" src="./images/image 229_4174.png" alt="map" /></div> */}

            <Link to="/map">
            <div><img className="route" src="./icon/route.svg"/></div>
            <span className="e118_432">루트</span>
            </Link>

            {/* 중간막대 */}
            <div className="e118_431"></div>
            
            <Link to="/Unfinished_route">
                <div><img className="uncomplted_route" src="./images/puzzle.png"/></div>
                <span className="e118_434">미완성 경로</span>
            </Link>
            
            <Link to="/Start">
                <span className="e118_433">시작</span>
                <div><img className='start_logo' src="./images/cookie-run-white.png"/></div>
                <div className="start_button_circle"></div>
            </Link>
        </div>
    );
}
