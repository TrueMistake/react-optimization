import React from 'react';
import {useParams} from "react-router-dom";
import {useGetResponse} from "../api/api";
import {formatDate} from "../helper/helper";

const CharactersDetail = () => {
  const {id}  = useParams();
  const url = 'https://rickandmortyapi.com/api/character';

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
      <img src={response.image} alt=""/>
      <div className=""><span>Статус:</span> {response.status}</div>
      <div className=""><span>Вид:</span> {response.species}</div>
      <div className=""><span>Имя:</span> {response.name}</div>
      {response.type
        ? <div className=""><span>Тип:</span> {response.type}</div>
        : null
      }
      <div className=""><span>Пол:</span> {response?.gender}</div>
      <div className=""><span>Дата создания:</span> {formatDate(response.created)}</div>
      <div className=""><span>Локация:</span> {response?.location?.name}</div>
    </div>
  );
};

export default CharactersDetail;