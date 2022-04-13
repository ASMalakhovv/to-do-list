import React from 'react';
import styles from "./Footer.module.css";
import {BsGithub, BsLinkedin, BsWhatsapp, FaTelegramPlane} from "react-icons/all";


const Footer = () => {
    return (
        <div className={styles.footer_wrapper}>
            <div className={styles.footer_container}>
                <h3 className={styles.footer_name}>Created by Malakhov Aleksandr</h3>
                <div className={styles.footer_boxs}>
                    <a className={styles.footer_box} href={'https://t.me/alsmalakhov'}>
                        <FaTelegramPlane size={18}/>
                    </a>
                    <a className={styles.footer_box} href={'https://wa.clck.bar/79835624005'}>
                    <BsWhatsapp size={18}/>
                    </a>
                    <a className={styles.footer_box} href={'https://github.com/ASMalakhovv'}>
                        <BsGithub size={18}/>
                    </a>
                    <a className={styles.footer_box} href={''}>
                        <BsLinkedin size={18}/>
                    </a>
                </div>
                <div className={styles.footer_copyright}>
                    <span dangerouslySetInnerHTML={{"__html": "&copy;"}}/>
                    <span>All rights reserved 2022</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;