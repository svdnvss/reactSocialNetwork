import soundEffect from '../../assets/popIt/pop3.mp3'
import styles from './PopIt.module.css';

const PopIt = (props) => {

    let sound = new Audio(soundEffect)
    const playSound = () => {
        sound.play();
    }

    return (
        <div className={styles.main}>
            <table onMouseDown={() => playSound() } />
        </div>

)
}

export default PopIt;