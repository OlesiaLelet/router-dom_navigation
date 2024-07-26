import styles from './Posts.module.css';
import Post from '../Post/Post.jsx';
import img from "../../icons/verified.png";


const ANAKIN_IMAGE="https://i.pinimg.com/564x/8f/3d/a0/8f3da08bfc4ed75e1dbb45cfcaf97578.jpg"
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const insideOut2 = "https://pbs.twimg.com/media/GQAINf-bEAEjd0N?format=jpg&name=900x900";
const anxiety ="https://pbs.twimg.com/profile_images/1666739253248921600/APFLohJ1_400x400.jpg";
const TEDTALKS ="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_400x400.jpg";
const TEDAI = "https://pbs.twimg.com/media/GOHR-MbWYAAo7LM?format=jpg&name=900x900";

const textWithLink= `When it comes to AI, what's real and what's just hype? Join host <a href="/">@BilawalSidhu</a> as he explores the future of tech with experts, artists, journalists and more.Listen to The TED AI Show wherever you get your podcasts: <a href="http://t.ted.com/w7h9trI">t.ted.com/w7h9trI</a>` ;


function Posts() {
  return (
    <div className={styles.content}>
      <Post name="Anxiety" avatar={anxiety} nickname="@thedailymsgs" icon_verify={img} date="10 лип." text="When you grow." photo={insideOut2} commAmount = {482} sharingsAmount = {146} likesAmount = {887}/>
      <Post name="Anakin Skywalker" avatar={ANAKIN_IMAGE} nickname="@dart_vader" icon_verify={img} date="26 лют." text="WTF? Who is Ray? Why is she Skywalker? Luke...?" photo={RAY_IMAGE} commAmount = {54} sharingsAmount = {222} likesAmount = {4322}/>
      <Post name ="TED TALKS" avatar={TEDTALKS} nickname="@TEDtalks" icon_verify={img} date="21 Трав." text = {textWithLink} photo={TEDAI} commAmount = {231} sharingsAmount = {321} likesAmount = {800}/>
    </div>
  
    
  )
}
export default Posts;

        