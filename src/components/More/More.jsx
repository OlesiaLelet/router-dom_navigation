 import styles from './More.module.css';
 import {contacts} from '../Contacts/Contacts';
import photo from '../../icons/man.png';


 const More = ()  => {
    
    return (
        <div className={styles.more}>
         <ul  className={styles.more__ul}>
            <li>
                <img src={photo}></img>
            </li>
            <li>
                {contacts[0].firstName}
            </li>
            <li>
                {contacts[0].lastName}
            </li>
            <li>
                {contacts[0].phone}
            </li>
           
            <li>
                {contacts[0].gender}
            </li>
            <li>
                <div className={styles.message}>
                    <div className={styles.person}>
                      <h3 className={styles.name}>{contacts[0].firstName}</h3>
                      <p className={styles.date}>25 лют</p>
                    </div>
                    <p className={styles.content}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aut quod sed explicabo est. Amet odit aperiam pariatur similique recusandae consequatur. Ea tempore, eligendi saepe eos corporis culpa quia vitae.</p>
                </div>
                
                
                
                <div className={styles.message}>
                  <div  className={styles.person}>
                    <h3 className={styles.name}>{contacts[0].firstName}</h3>
                    <p className={styles.date}>4 лип</p>
                  </div>
                  <p className={styles.content}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod cumque nisi excepturi dolor minus illo tempore dolorem distinctio quasi! Ad cupiditate laudantium a quibusdam dolore nisi nam eligendi. Illo, iste!</p>
                </div>
            
            </li>

      
        </ul>
          
        

    </div> 
    )
 }

 export default More;