import styles from './Header.module.css';

const Header = () => {
    return(
        <header className={styles.header}>
            <h2>Dashboard</h2>
            <form className={styles.searchBar} action="">
                <input type="text" placeholder='Search...' />
            </form>
            <div className={styles.headerIcons} >
                <div className={styles.notification}>
                    <i className="fa-solid fa-bell"></i>
                </div>
                <img className={styles.avatar} src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg" alt="" />
            </div>
        </header>
    )
}

export default Header;