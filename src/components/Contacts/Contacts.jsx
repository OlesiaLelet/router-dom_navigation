import  styles from './Contacts.module.css';
import { useState } from 'react';
import Contact1 from '../Contact1/Contact1.jsx';
import maleIcon from "../../icons/man.png";
import femaleIcon from "../../icons/woman.png";
import emptysquare from "../../icons/square.png";


export const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський", 
    phone: "+380956319521",
    gender: "male",
    id: 1
    }, {
    firstName: "Робıн",
    lastName: "Щербатська", 
    phone: "+380931460123",
    gender: "female",
    id: 2,
    }, {
    firstName: "Анонıмний",
    lastName: "Анонıмус",
    phone: "+380666666666",
    id: 3,
    }, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
    id: 4,
    }, {
    firstName: "Маршен",
    lastName: "Ерıксонян",
    phone: "+380739432123",
    gender: "male",
    id: 5,
    }, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
    id: 6,
    }]

const Contacts = () => {
    
   const [contact, setContact] = useState(contacts);
   const [search, setSearch] = useState("");
   const [isFemale, setIsFemale] = useState(true);
   const [isMale, setIsMale] = useState(true);
   const [isUndefined , setIsUndefined] = useState(true);
  


   const handlerSearch = (event) => {
   const {value} = event.target;
   console.log(value);
   setSearch(value);
   filterContacts(contacts, value, isFemale, isMale);
   
   }
   const filterContacts = (array, searchStr, isWoman, isMan, isUndefined) => {
    const filteredBySearch = array.filter(obj => obj.lastName.toLowerCase().includes(searchStr.toLowerCase())||obj.lastName.toLowerCase().includes(searchStr.toLowerCase())||obj.firstName.toLowerCase().includes(searchStr.toLowerCase())||obj.phone.includes(searchStr));
    const filteredByGender =  filteredBySearch.filter (obj => (obj.gender==="female"&& isWoman) || ( obj.gender==="male"&&isMan) || (!obj.gender&&isUndefined));


    setContact(filteredByGender);
    
   }

  const handlerFilterFemale = (event) => {
    const {checked} = event.target;
    setIsFemale(checked);
    filterContacts(contacts, search, checked, isMale);
   }

   const handlerFilterMale = (event) => {
    const {checked} = event.target;
    setIsMale(checked);
    filterContacts(contacts, search, isFemale, checked);
   }
   const handlerFilterUndefined = (event) => {
    const {checked} = event.target;
    setIsUndefined(checked);
    filterContacts(contacts, search, isFemale, isMale, checked);
   }

  
    return <div className={styles.contacts}>
         <input type="text" placeholder="пошук"  value = {search} onChange = {handlerSearch} className={styles.search}/>
         <div className={styles.content__checkboxes}>
                <input type="checkbox" id="female" name="female"  checked = {isFemale} onChange={handlerFilterFemale} className={styles.checkboxes__female}/>
            <label htmlFor="female" className={styles.female__label}>жіноча</label>
            <input type="checkbox" id="male" name='male' checked = {isMale} onChange={handlerFilterMale} className={styles.checkboxes__male}/>
            <label htmlFor="male" className={styles.male__label}>чоловіча</label>
            <input type="checkbox" id="undefined" name='undefined' checked={isUndefined} onChange={handlerFilterUndefined} className={styles.checkboxes__undefined}/>
            <label htmlFor="undefined" className={styles.undefined__label}>невказаний</label>
         </div> 
     <ul className={styles.contacts}>{contact.map((item) => 
     <li key={item.firstName + item.lastName}>
        
      <Contact1 firstName={item.firstName} lastName={item.lastName} phone={item.phone} gender={item.gender==="male"? maleIcon : item.gender==="female"? femaleIcon : emptysquare}/>
            
    </li>)}
    
    </ul>
    </div>
}
export default Contacts;