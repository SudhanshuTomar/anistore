
import './Homepage.scss';
import Listitem from '../../components/list-item/listitem';
function Homepage() {
  return (
    <div className="homepage">
      <h1>Homepage</h1>
      <div className='directory-list'>
        <Listitem title='Anime-1' subtitle='Manga' />
        <Listitem title='Anime-2' subtitle='Manga' />
        <Listitem title='Anime-3' subtitle='Manga' />
        <Listitem title='Anime-4' subtitle='Manga' />
        <Listitem title='Anime-5' subtitle='Manga' />
      </div>
    </div>
  );
}

export default Homepage;
