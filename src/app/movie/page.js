import MovieCard from '../components/MovieCard/page';
import styles from '../styles/common.module.css';

const Movie = async () => {
  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'edce0c1e83mshd23e3c7af0690e9p19cf6ejsnb440e2cc621c',
      'x-rapidapi-host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log("+++", data);

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {
              main_data.map((curElem) => {
                return <MovieCard key={curElem.id} {...curElem} />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Movie