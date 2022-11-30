import styles from './CryptoBlock.module.css'


const CryptoBlock = (crypto) => {
    console.log()
    return(
        <div className={`${styles.cryptoBlock} ${crypto.crypto}` }>
            <i className="cf cf-btc"></i>
            <h2>Crypto Block</h2>
        </div>
    )
}

export default CryptoBlock;