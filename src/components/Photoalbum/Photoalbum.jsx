import styles from "./Photoalbum.module.css";
import p1 from "../../icons/p1.jpg";
import p2 from "../../icons/p2.jpg";
import p3 from "../../icons/p3.jpg";
import p4 from "../../icons/p4.jpg";
import p5 from "../../icons/p5.jpg";
import p6 from "../../icons/p6.jpg";
import p7 from "../../icons/p7.jpg";
import p8 from "../../icons/p8.jpg";

const Photoalbum = () => {


     return (
        <div className={styles.content}>
            <ul className={styles.album}>
                <li className={styles.album__item}>
                    <img className={styles.album__pict} src={p1} alt="album_picture"></img>
                </li>
                <li className={styles.album__item}>   
                    <img  className={styles.album__pict} src={p2} alt="album_picture"></img>
                </li>
                <li className={styles.album__item}>
                    <img className={styles.album__pict} src={p3} alt="album_picture"></img>
                </li>
                <li className={styles.album__item}>
                    <img className={styles.album__pict} src={p4} alt="album_picture"></img>
                </li>
                <li className={styles.album__item}>
                    <img className={styles.album__pict} src={p5} alt="album_picture"></img>
                </li>
                <li className={styles.album__item}>
                    <img className={styles.album__pict}src={p6} alt="album_picture"></img>
                </li>
                <li className={styles.album__item}>
                    <img className={styles.album__pict} src={p7} alt="album_picture"></img>
                </li>
                <li className={styles.album__item}>
                    <img className={styles.album__pict} src={p8} alt="album_picture"></img>
                </li>


            </ul>
        </div>

     )

}

export default Photoalbum;