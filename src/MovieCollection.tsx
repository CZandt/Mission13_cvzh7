import { useState } from 'react';
import data from './MovieData.json';
const MovieData = data.MovieData;

function MovieCollection() {
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
                    <th>Edited</th>
                  </tr>
                </thead>

                <tbody>
                  {MovieData.map((m) => (
                    <tr>
                      <td>{m.Title}</td>
                      <td>{m.Director}</td>
                      <td>{m.Year}</td>
                      <td>{m.Rating}</td>
                      <td>{m.Category}</td>
                      <td>{m.Edited ? 'True' : true}</td>
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
