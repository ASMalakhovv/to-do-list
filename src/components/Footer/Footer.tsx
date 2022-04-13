import React from 'react';
import styles from "./Footer.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className={styles.footer_wrapper}>
            <div className={styles.footer_container}>
                <h3 className={styles.footer_name}>Created by Malakhov Aleksandr</h3>
                <div className={styles.footer_boxs}>
                    <a className={styles.footer_box} href={'https://t.me/alsmalakhov'}>
                        <FontAwesomeIcon icon={faTelegram} size={"2x"}/>
                    </a>
                    <a className={styles.footer_box} href={'https://wa.clck.bar/79835624005'}>
                        <FontAwesomeIcon icon={faWhatsapp} size={"2x"}/>
                    </a>
                    <a className={styles.footer_box} href={'https://github.com/ASMalakhovv'}>
                        <FontAwesomeIcon icon={faGithub} size={"2x"}/>
                    </a>
                    <a className={styles.footer_box} href={''}>
                        <FontAwesomeIcon icon={faLinkedin} size={"2x"}/>
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