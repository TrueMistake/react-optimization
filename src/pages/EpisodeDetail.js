import React from 'react';
import {useParams} from "react-router-dom";
import {useGetResponse} from "../api/api";

const EpisodeDetail = () => {
  const {id}  = useParams();
  const url = 'https://rickandmortyapi.com/api/episode';

  const {
    loading,
    error,
    response
  } = useGetResponse(url, 1, id);

  return (
    <div className="block">
      {loading && <div>Загрузка...</div>}
      {error && <div>Что-то пошло не так...</div>}
      <br/>
      <div className=""><span>Название:</span> {response.name}</div>
      <div className=""><span>Дата выхода:</span> {response.air_date}</div>
      <div className=""><span>Номер эпизода:</span> {response.episode}</div>
      <div className=""><span>дата создания:</span> {response.air_date}</div>
    </div>
  );
};

export default EpisodeDetail;