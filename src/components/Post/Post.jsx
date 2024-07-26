import styles from './Post.module.css';
import img1 from "../../icons/chat.png";
import img2 from "../../icons/share.png";
import img3 from "../../icons/heart.png";
import img4 from "../../icons/download.png";


const Post = ({name, avatar, photo, nickname, icon_verify, date, text, commAmount, sharingsAmount, likesAmount}) => {

    return  <div className={styles.post}>
    <div className={styles.post__user}>
       <img className={styles.user__avatar} src={avatar} alt="ANAKIN_IMAGE"></img>
       <span className={styles.user__name}>{name}</span>
       <img className={styles.user__sign} src={icon_verify} alt="verified"></img>
       <span className={styles.user__nickname}>{nickname}</span>
       <span className={styles.user__date}>{date}</span>
    </div>
    <div className={styles.post__text} dangerouslySetInnerHTML= {{__html: text}}></div>
    <img className={styles.post__pict} src={photo} alt="post_pict"></img>
    <div className={styles.post__details}>
        <div className={styles.details__coments}>
          <img className={styles.comments__icon} src={img1} alt='comments__icon'></img>  
          <span className={styles.comments__amount}>{commAmount}</span>
        </div>

        <div className={styles.details__sharings}>
          <img className={styles.comments__icon} src={img2} alt='sharings__icon'></img> 
          <span className={styles.sharings__amount}>{sharingsAmount}</span> 
        </div>

        <div className={styles.details__likes}>
          <img className={styles.comments__icon} src={img3} alt='coments__icon'></img>
          <span className={styles.likes__amount}>{likesAmount}</span>
        </div>

        <div className={styles.details__download}>
          <img className={styles.comments__icon} src={img4} alt='coments__icon'></img>
        </div>
  </div>
</div>

    
}
export default Post;