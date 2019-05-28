import http from "./httpService";

import { apiUrl } from '../config.json';

const apiEndPoint = `${apiUrl}/movies`;

function movieUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function getMovies() {
  return http.get(apiEndPoint);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}
