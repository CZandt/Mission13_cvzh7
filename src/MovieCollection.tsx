import { useState } from 'react';
import data from './MovieData.json';
import { Movie } from './types/movie';

function MovieCollection() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  const fetchMovie = async () => {
    const rsp = await fetch('https://localhost:4000/movie');
    const temp = await rsp.json();
    setMovieData(temp);
  };

  fetchMovie();

  return (
    <>
      <br />
      <div className="d-flex align-items-center justify-content-center">
        <h3>The Movie Collection</h3>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-9">
            <div className="card">
              <table className="table table-hover table-striped">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Year</th>
                    <th>Rating</th>
                    <th>Category</th>
                    <th>LentTo</th>
                    <th>Edited</th>
                    <th>Notes</th>
                  </tr>
                </thead>

                <tbody>
                  {movieData.map((m) => (
                    <tr>
                      <td>{m.title}</td>
                      <td>{m.director}</td>
                      <td>{m.year}</td>
                      <td>{m.rating}</td>
                      <td>{m.category}</td>
                      <td>{m.lentTo}</td>
                      <td>{m.edited}</td>
                      <td>{m.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default MovieCollection;
