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
          <Link href="/HeaderThree"> {/* HeaderThree sayfasına yönlendirme */}
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
    'https://www.socool.sg/wp-content/uploads/2023/03/ac-2-1080x675.jpg',
    'https://cmheating.com/wp-content/uploads/2023/05/air-conditioner-repair-5ee38c7a9eae0-1.jpg',
    'https://www.pioneerminisplit.com/cdn/shop/articles/VpDdG2FNQ9xRE7iIlKBarBbLLHnYUz341630085147.jpg?v=1631021244',
    'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2023/05/ac-repair.jpeg.jpg',
    'https://dandelife.com/wp-content/uploads/2021/06/Top-7-Signs-You-Need-Air-Conditioner-Repair-Services.jpg',
    'https://www.seaairac.com/wp-content/uploads/2022/11/AdobeStock_230732444-1024x626-1.jpg',
    'https://st2.depositphotos.com/1010613/11847/i/950/depositphotos_118477244-stock-photo-technician-repairing-air-conditioner.jpg',
    'https://5.imimg.com/data5/SELLER/Default/2020/12/TF/VY/HC/54549470/ac-repairing-services.jpg',
    'https://air-conditioning-edmonton.ca/wp-content/uploads/2022/03/air-conditioner-installation-edmonton.jpg',
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
          <img src="https://eurolux.az/wp-content/uploads/2022/05/Kondisioner-AUX-ASW30A4-FFR1-2.jpg" alt="Your Image" className={styles.cardImage} />
          <div className={styles.cardText}>
            <h2 className={`${styles.cardTitle} ${styles.medium}`}>Kondisioner Ustası</h2>
            <br/>
            <p className={styles.cardDescription}>Təcrübəli kondisioner ustası sayəsində texnikanız qısa müddət ərzində təmir olunacaqdır. 
            Xidmətdən razı qalacağınıza əminik. Çünki uzun illər bu sahədə olan ustalarımız gördükləri işə zəmanət verir. 
            Yalnızca orijinal marka məhsullarından istifadə etməyimiz bizim işimizin əla keyfiyyətdə olmasının səbəbidir.
            <br/>
            <br/>
            Sizə yaxın ünvanda kondisioner ustası axtarırsınızsa, o zaman bizi seçməyi tövsiyyə edirik. 
            Bakının bütün qəsəbələri üçün 7/24 kondisioner ustası xidməti təklif edirik. Peşəkar ustalarımız sayəsində təmir müddəti qısa və keyfiyyətli şəkildə başa çatacaqdır.
            <br/>
            <br/>
            Tam təchiatlı kondisioner ustası sayəsində təmir işləri yüksək keyfiyyətdə və sürtəli şəkildə yekunlaşacaqdır. 
            Komandamızda çalışan ustalarımız orijinal ehtiyat hissələrindən istifadə edirlər. 
            Ona görə də rahatlıqla bizim xidmətdən istifadə edərək kondisionerinizi bizə əmanət edə bilərsiniz.
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
            <Link href="/HeaderThree"> {/* HeaderThree sayfasına yönlendirme */}
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
    const [activeTab, setActiveTab] = useState('HeaderThree');
  
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
  