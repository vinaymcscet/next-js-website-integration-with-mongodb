import styles from "../../styles/common.module.css";
import Image from "next/image";

const page = async({params}) => {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'edce0c1e83mshd23e3c7af0690e9p19cf6ejsnb440e2cc621c',
        'x-rapidapi-host': 'netflix54.p.rapidapi.com'
      }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data[0].details;
    console.log("****", main_data);
  return (
    <>
      <div className={styles.container}>
          <h2 className={styles.movie_title}>   Netflix \ <span> {main_data.type != null ? main_data.type : 'NA'} </span> </h2>
          <div className={styles.card_section}>
              <div>
                  <Image src={main_data.backgroundImage.url != '' ? main_data.backgroundImage.url : '/na.jpg'} alt={main_data.title ? main_data.title : 'No Title'} width={600} height={300} />
              </div>
              <div>
                  <h1>{main_data.title.length > 1 ? main_data.title : 'Movie Not available right now'}</h1>
                  <p>{main_data.synopsis.length > 1 ? main_data.synopsis : 'Movie description not available'}</p>
              </div>
          </div>
      </div>

    </>
  )
}

export default page