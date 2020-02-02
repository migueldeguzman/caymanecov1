import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <div className={styles.navbar}>
  <div className={styles.dropdown}>
    <button className={styles.dropbtn}>Menu
      <i className="fa fa-caret-down"></i>
    </button>
    <div className={styles.dropdownContent}>
      <nav role="navigation">
        <ul className={styles.navigation}>
          <li className={styles.navigationItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/climateScience101/">Climate Science 101</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/climateChangeCorner/">Climate Change Corner</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/reduce-reuse-recycle/">Reduce, Reuse & Recycle</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/blog/">Video Eco</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>
)


  // <nav role="navigation">
  //   <ul className={styles.navigation}>
  //     <li className={styles.navigationItem}>
  //       <Link to="/">Home</Link>
  //     </li>
  //     <li className={styles.navigationItem}>
  //       <Link to="/blog/">Climate Change Corner</Link>
  //     </li>
  //     <li className={styles.navigationItem}>
  //       <Link to="/blog/">Beyond Cayman</Link>
  //     </li>
  //     <li className={styles.navigationItem}>
  //       <Link to="/blog/">Climate Science 101</Link>
  //     </li>
  //     <li className={styles.navigationItem}>
  //       <Link to="/blog/">Video Eco</Link>
  //     </li>
  //   </ul>
  // </nav>