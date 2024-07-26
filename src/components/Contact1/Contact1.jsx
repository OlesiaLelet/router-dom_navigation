import styles from "./Contact1.module.css";
import {Link, Outlet, useSearchParams} from 'react-router-dom';
import {elements} from '../../App.js';
import { useState } from "react";







const Contact = ({firstName, lastName, phone, gender, }) => {
    const [isMore, setIsMore] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

 

  const handlerClick = ( () => {
    setIsMore(!isMore);

  })

    return <div className={styles.contact} >
                <div className={styles.contact__pict}>
                    <img className={styles.pict__gender} src={gender} alt="contact__gender"/>
                </div>
              
                <div className={styles.contact__inform}>
                    <div className={styles.contact__name}>
                        <div className={styles.name__firstName}>{firstName}</div>
                        <div className={styles.name__lastName}>{lastName}</div> 
                        {firstName==="Барней" ?
                          <Link className={styles.more} to={firstName + lastName} onClick={handlerClick}>{!isMore? "..." : <Link className={styles.more} to={elements.contacts}>x</Link> } </Link>
                        : '' } 
                    </div>
                    <div className={styles.contact__phone}>{phone}</div> 
                    {isMore? <Outlet/>: ''}  
                </div>
            </div>
}

export default Contact;