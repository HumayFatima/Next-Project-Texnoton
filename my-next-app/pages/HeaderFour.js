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
          <Link href="/HeaderFour"> {/* HeaderFour sayfasına yönlendirme */}
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
    'https://i0.wp.com/rayhaber.com/wp-content/uploads/2021/11/kombi-bakimi-nasil-ve-ne-zaman-yapilmalidir-kombi-bakimi-kiraciya-mi-aittir%E2%80%8B.jpg?resize=678%2C381&ssl=1',
    'https://more-heat.com/wp-content/uploads/2019/09/heating-central-gas-furnace-AFRW6SQ-copy.jpg',
    'https://toplineair.com/wp-content/uploads/2022/04/boiler-repair-services-in-honey-brook-pa.jpg',
    'https://opplumbingandheating.ca/wp-content/uploads/2016/12/Boiler.jpg',
    'https://images.theecoexperts.co.uk/wp-content/uploads/2020/01/Installing-gas-boiler-1.jpeg',
    'https://5.imimg.com/data5/SELLER/Default/2021/9/NU/IM/BX/56792854/boiler-maintenance-service-500x500.jpeg',
    'https://www.trabzonteknik.com.tr/1602-large_default/combi-repair.jpg',
    'https://nationheating.ca/wp-content/uploads/2021/07/Boiler.jpg',
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
        <img src="https://dnmkmuhendislik.com/wp-content/uploads/2020/10/kom-mont.1f36b52.2ca554d.jpg" alt="Your Image" className={styles.cardImage} />
        <div className={styles.cardText}>
          <h2 className={`${styles.cardTitle} ${styles.medium}`}>Kombi ustası</h2>
          <br/>
          <p className={styles.cardDescription}>Təcrübəli kombi ustalarını bizim saytımızda tapa biləcəksiz. 
          Bir zənginizlə usta xidmətlərimizdən istifadə edə bilərsiniz. Ünvanın harada yerləşməsindən asılı olmayaraq ustalarımız qısa müddətə həmin mənzildə olacaqdır.
          <br/>
          <br/>
          Ən münasib qiymətə kombi ustası sizlər üçün təklif olunur. 
          Biz sizin üçün ən sərfəli qiymətə usta xidmətləri təklif edirik. Cibinizə qənaət bizimlə mümkündür. Keyfiyyətli xidmət axtarışındasınızsa, seçiminiz TEXNOTON olmalı.
          <br/>
          <br/>
          Qısa müddətə hər növ temir üçün kombi ustası TEXNOTON.
          Kombinizdə hər hansı bir problem varsa, o zaman bizə müraciət edin. Yüksək keyfiyyətdə xidmət təklif edən ustalarımızın xidmətindən siz də yararlanmağa tələsin.
          </p>
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
            <Link href="/HeaderFour"> {/* HeaderFour sayfasına yönlendirme */}
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
    const [activeTab, setActiveTab] = useState('HeaderFour');
  
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
  