import styles from './CryptoList.module.css'
import CryptoBlock from "./cryptoBlock";

const CryptoList = () => {

    const cryptos = ["bitcoin","eth","tether"]

    return (
        <section>
            <h2>Crypto List</h2>
            <div className={styles.cryptolist}>
                {cryptos.map(crypto => {
                    return(
                        <CryptoBlock crypto={crypto} />
                    )
                })}
            </div>
        </section>
    )
}

export default CryptoList;