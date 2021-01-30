import React, { useState } from 'react'
import styles from './Home.module.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { FiChevronRight } from "react-icons/fi";
import{ FiSunrise,FiPlus,FiSunset }from "react-icons/fi";
import {BsCircle } from "react-icons/bs"
import {BiRightArrowAlt } from "react-icons/bi"
import {AiOutlineClockCircle } from "react-icons/ai"

export default function Home () {

const [date,setDate] =useState(new Date());
 
 const onchange = date =>
 {
     setDate(date);
 }
    return (
        <>
            <div className={styles.container} >
                <div className={styles.mainRow}>
                    <div className={styles.columnOne}>
                <aside className={styles.asideNav}>
                    <div className={styles.title}>
                       <div className={styles.head}> Appointments </div> <span className={styles.head1}> | Home <FiChevronRight /> application</span>
                    </div>
                    <div className={styles.dateContainer}>
                        <Calendar />
                    </div>
                </aside>
                </div>
                <div className={styles.columnTwo}>
                    <div className={styles.event}>
                       <div className ={styles.sec}>
                     <div className={styles.ii}> <FiSunrise color="orange"/></div> 
                           <span className={styles.details}>
                               <div className={styles.se}>Morning</div>
                               <div className={styles.time}>9.00 AM to 12.00 PM</div>
                           </span>
                           <div className={styles.ii1}><FiPlus color="blue" /> </div>
                           <span className={styles.details}> 
                               <div className={styles.tit}>Add Slot </div>
                           </span>
                       </div>
                       <div className={styles.sch}>
                           <table className={styles.tabl}>
                               <tr >
                                   <td className={styles.timing}><button className={styles.btns}><span className={styles.bs}><BsCircle color="blue" /></span>9.10 AM</button></td>
                                   <td className={styles.timing}><button className={styles.btns}> <span className={styles.bs}><BsCircle color="blue" /></span>9.20 AM</button></td>
                                   <td className={styles.timing}><button className={styles.btns}><span className={styles.bs}><BsCircle color="blue" /></span>9.30 AM</button></td>
                                   <td className={styles.timing}><button className={styles.btns}><span className={styles.bs}><BsCircle color="blue" /></span>9.40 AM</button></td>
                                   <td className={styles.timing}><button className={styles.btns}><span className={styles.bs}><BsCircle color="blue" /></span>9.50 AM</button></td>
                               </tr>
                               <tr >
                                   <td className={styles.timing}><button className={styles.btns}><span className={styles.bs}><BsCircle color="blue" /></span>10.00 AM</button></td>
                                   <td className={styles.timing}><button className={styles.btns}><span className={styles.bs}><BsCircle color="blue" /></span> 10.10 AM</button></td>
                                   <td className={styles.timing}><button className={styles.active}><span className={styles.bs}><BiRightArrowAlt color="white" /></span>10.20 AM</button></td>
                                   <td className={styles.timing}><button className={styles.btns}><span className={styles.bs}><BsCircle color="blue" /></span>10.30 AM</button></td>
                                   <td className={styles.timing}><button className={styles.btns}><span className={styles.bs}><BsCircle color="blue" /></span>10.40 AM</button></td>
                               </tr>
                           </table>
                       </div>
                    </div>
                    <div className={styles.event}>
                       <div className ={styles.sec}>
                     <div className={styles.ii}> <FiSunset color="orange"/></div> 
                           <span className={styles.details}>
                               <div className={styles.se}>Evening</div>
                               <div className={styles.time}>5.00 PM to 10.00 PM</div>
                           </span>
                           <div className={styles.ii1}><FiPlus color="blue" /> </div>
                           <span className={styles.details}> 
                               <div className={styles.tit}>Add Slot </div>
                           </span>
                       </div>
                       <div className={styles.sch}>
                           <table className={styles.tabl}>
                               <tr >
                                   <td className={styles.timing}><button className={styles.btns}><span className={styles.bs}><BsCircle color="blue" /></span>5.10 PM</button></td>
                                   <td className={styles.timing}><button className={styles.btns}> <span className={styles.bs}><BsCircle color="blue" /></span>5.20 PM</button></td>
                                   <td className={styles.timing}><button className={styles.btns}><span className={styles.bs}><BsCircle color="blue" /></span>5.30 PM</button></td>
                                   <td className={styles.timing}><button className={styles.btns}><span className={styles.bs}><BsCircle color="blue" /></span>5.40 PM</button></td>
                                   <td className={styles.timing}><button className={styles.btns}><span className={styles.bs}><BsCircle color="blue" /></span>5.50 PM</button></td>
                               </tr>
                               <tr >
                                   <td className={styles.timing}><button className={styles.btns}><span className={styles.bs}><BsCircle color="blue" /></span>6.00 PM</button></td>
                                   <td className={styles.timing}><button className={styles.btns}><span className={styles.bs}><BsCircle color="blue" /></span> 6.10 PM</button></td>
                
                                   <td className={styles.timing}><button className={styles.btns}><span className={styles.bs}><BsCircle color="blue" /></span>6.30 PM</button></td>
                                   <td className={styles.timing}><button className={styles.btns}><span className={styles.bs}><BsCircle color="blue" /></span>6.40 APM</button></td>
                               </tr>
                           </table>
                       </div>
                    </div>
                    <div className={styles.event}>
                       <div className ={styles.sec}>
                     <div className={styles.ii}> <AiOutlineClockCircle color="blue"/></div> 
                           <span className={styles.details1}>
                               <div className={styles.se}>Waiting</div>
                               
                           </span>
                           <div className={styles.ii2}><FiPlus color="blue" /> </div>
                           <span className={styles.details}> 
                               <div className={styles.tit1}>Add Slot </div>
                           </span>
                       </div>
                      
                    </div>
                </div>
                
                </div>
               </div>
        </>
    )
}
