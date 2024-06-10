import React, { useState, useEffect } from 'react';
import { FaInstagram, FaWhatsapp, FaTiktok, FaPhone } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';
import styles from '../styles/Home.module.css';
import Link from 'next/link';





const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1 className={styles.logoText}>
          <Link href="/HeaderTwo"> {/* HeaderTwo sayfasına yönlendirme */}
            TEXNOTON
            <FaTools className={styles.repairIcon} />
          </Link>
        </h1>
      </div>
      <div className={styles.socialIcons}>
        <a href="#" className={`${styles.icon} ${styles.instagram}`}>
          <FaInstagram />
        </a>
        <a href="#" className={`${styles.icon} ${styles.whatsapp}`}>
          <FaWhatsapp />
        </a>
        <a href="#" className={`${styles.icon} ${styles.tiktok}`}>
          <FaTiktok />
        </a>
        <a href="#" className={`${styles.icon} ${styles.telefon}`}>
          <FaPhone />
        </a>
      </div>
    </header>
  );
};

const RepairCard = () => {
  const images = [
    'https://www.capitanappliance.com/wp-content/uploads/2023/01/g9e2BwkAVS6touFGLqCCap7df6DguSwj1673541070.jpg',
    'https://www.smartappliance.co.za/wp-content/uploads/2023/06/lg-washing-machine-service-centre-in-durban--1024x683.webp',
    'https://www.swappliancerepair.com/wp-content/uploads/2022/02/Washer-Repair_1937752486.jpg',
    'https://the-riotact.com/wp-content/uploads/2011/08/The-best-washing-machine-repairs-in-Canberra.jpg',
    'https://nationwideappliancerepairs.com.au/wp-content/uploads/2023/02/Washing-Machine-Repair-cost-1-1024x536.jpg',
    'https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2022/09/who-to-call-to-fix-washing-machine.jpg',
    'https://www.selecthomewarranty.com/blog/wp-content/uploads/2023/01/clothes-dryer-repair-1620x1080-1.jpeg',
    'https://lirp.cdn-website.com/5725e658/dms3rep/multi/opt/wash-1-640w.jpg',   
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 3000); // 3 saniyede bir geçiş yapacak şekilde ayarlandı

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
    <div className={styles.pageHeader}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.pageCaption}>
              <div className={styles.slider}>
                <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} style={{ width: '800px', height: '400px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.repairCard}>
      <div className={styles.cardContent}>
        <img src="https://www.mrappliance.com/us/en-us/mr-appliance/_assets/expert-tips/images/mra-blog-top-vs-front-loader-hero.webp" alt="Your Image" className={styles.cardImage} />
        <div className={styles.cardText}>
          <h2 className={`${styles.cardTitle} ${styles.medium}`}>Paltaryuyan maşın təmiri</h2>
          <br/>
          <p className={styles.cardDescription}>TEXNOTON şirkəti Lg, Samsung, Siemens, Bosch, Hitachi, Zanussi, Electrolux, Beko, 
           İndesit, Hotpoint-Ariston, Gorenje, Sharp, AEG, Ardo, Midea, Panasonic, Haier, Arçelik, Whirpool,
           Toshiba, Vestel, Atlant, Powerful, General Electric, Miele, Blomberg və digər istehsalçıların paltaryuyan maşınların təmiri üzrə yüksək keyfiyyətli xidmət göstərir.
           <br/>
           <br/>
           İşində təcrübəli və uzun illər bu sahədə bilgilər qazanmış ustalarımızla birlikdə göstərdiyimiz paltaryuyan maşınların quraşdırılması və təmiri xidmətlərimiz müştəri 
           təhlükəsizliyi prinsipinə əsaslanır. Təmir zamanı yüksək keyfiyyətli materiallardan istifadə olunur. Xidmət həm evdə həm də servisdə həyata keçirilə bilər. 
           Təmir etdiyimiz bütün paltaryuyan maşınlara zəmanət verilir..</p>
        </div>
      </div>
    </div>
    <div className={styles.repairCardSocialIcons}>
  {/* New social icons with different styles */}
  <a href="link-to-instagram" className={`${styles.socialButton} ${styles.repairCardInstagram}`}>
    <FaInstagram />
  </a>
  <a href="link-to-whatsapp" className={`${styles.socialButton} ${styles.repairCardWhatsapp}`}>
    <FaWhatsapp />
  </a>
  <a href="link-to-tiktok" className={`${styles.socialButton} ${styles.repairCardTiktok}`}>
    <FaTiktok />
  </a>
  <a href="tel:+1234567890" className={`${styles.socialButton} ${styles.repairCardTelefon}`}>
    <FaPhone />
  </a>
 </div>
  </div>
  );
};


const Cards = () => {
  return (
    <div className="containerCards">
      <div className="card">
        <Link href="/Header">
          <div>
            <img src="https://allapplianceandrefrigeration.com/wp-content/uploads/2021/05/refrigerator-repair.jpg" alt="Image 1" />
            <h2>Soyuducu ustası</h2>
            <p>Təmir haqqında ətraflı məlumat üçün buraya daxil olun</p>
          </div>
        </Link>
      </div>
      <div className="card">
        <Link href="/HeaderTwo">
          <div>
            <img src="https://sewellelectric.com/wp-content/uploads/2019/10/washing-machine-repair.jpeg" alt="Image 2" />
            <h2>Paltaryuyan ustası</h2>
            <p>Təmir haqqında ətraflı məlumat üçün buraya daxil olun</p>
          </div>
        </Link>
      </div>
      <div className="card">
        <Link href="/HeaderThree">
          <div>
            <img src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2023/05/ac-repair.jpeg.jpg" alt="Image 3" />
            <h2>Kondisoner ustası</h2>
            <p>Təmir haqqında ətraflı məlumat üçün buraya daxil olun</p>
          </div>
        </Link> 
      </div>
      <div className="card">
        <Link href="/HeaderFour">
          <div>
            <img src="https://www.clarkesgasservices.com/wp-content/uploads/2023/03/AdobeStock_537125355-min.jpeg" alt="Image 4" />
            <h2>Kombi ustası</h2>
            <p>Təmir haqqında ətraflı məlumat üçün buraya daxil olun</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          <h1 className={styles.logoText}>
            <Link href="/HeaderTwo"> {/* HeaderTwo sayfasına yönlendirme */}
              TEXNOTON
              <FaTools className={styles.repairIcon} />
            </Link>
          </h1>
        </div>
        <div className={styles.footerSocial}>
          <a href="#" className={`${styles.icon} ${styles.instagram}`}>
            <FaInstagram />
          </a>
          <a href="#" className={`${styles.icon} ${styles.whatsapp}`}>
            <FaWhatsapp />
          </a>
          <a href="#" className={`${styles.icon} ${styles.tiktok}`}>
            <FaTiktok />
          </a>
          <a href="#" className={`${styles.icon} ${styles.telefon}`}>
            <FaPhone />
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} [TEXNOTON].</p>
        <p>Designed and developed by [Fatima Imanova].</p>
      </div>
    </footer>
  );
};

const Home = () => {
    const [activeTab, setActiveTab] = useState('HeaderTwo');
  
    const handleClick = (tab) => {
      setActiveTab(tab);
    };
  
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <RepairCard />
        </div>
        <Cards />
        <Footer />
        <div className={styles.credits}>
        </div>
      </div>
    );
  };
  
  export default Home;
  