import styles from '../../styles/common.module.css';
import Image from 'next/image';
import Link from 'next/link';

const MovieCard = (curElem) => {
    const { id, type, title, synopsis, backgroundImage } = curElem.jawSummary || {};
    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src={backgroundImage.url ? backgroundImage.url : '/na.jpg'} alt={title || 'No Title'} width={260} height={200} />
                </div>
                <div className={styles.card_data}>
                    <h2>{title.length > 1 ? title.substring(0, 18) : 'Movie Not available right now'}</h2>
                    <p>{synopsis.length > 1 ? `${synopsis.substring(0, 66)}...` : 'Movie description not available'}</p>
                    <Link href={`/movie/${id}`}>
                        <button>Read More</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MovieCard