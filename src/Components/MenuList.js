import {BsFillHouseFill, BsJournalAlbum} from 'react-icons/bs';
import {FaBroadcastTower, FaMicrophoneAlt, FaPodcast} from 'react-icons/fa';
import {BiPulse} from 'react-icons/bi';

const MenuList = [
    {
    id: 1,
    icon : <BsFillHouseFill /> ,
    name: "Home" ,
    } ,


    {
    id: 2,
    icon : <BiPulse /> ,
    name: "Discover" ,
    } ,


    {
    id: 3,
    icon : <FaMicrophoneAlt /> ,
    name: "Artist" ,
    } ,


    {
    id: 4,
    icon : <BsJournalAlbum /> ,
    name: "Albums" ,
    } ,

];

export {MenuList};