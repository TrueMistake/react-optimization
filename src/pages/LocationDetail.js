import React from 'react';
import {useParams} from "react-router-dom";
import {formatDate} from "../helper/helper";
import {useGetResponse} from "../api/api";
import ErrorBoundary from "../components/ErrorBoundary";

const LocationDetail = () => {
  const {id}  = useParams();
  const url = 'https://rickandmortyapi.com/api/location';

  const {
    loading,
    error,
    response
  } = useGetResponse(url, 1, id);

  return (
    <div className="block">
      {loading && <div>Загрузка...</div>}
      {error && <div>Что-то пошло не так...</div>}
      <div className=""><span>Названия:</span> {response.name}</div>
      <div className=""><span>Тип:</span> {response.type}</div>
      <div className=""><span>Изменения:</span> {response.dimension}</div>
      <div className=""><span>Дата создания:</span> <ErrorBoundary>{formatDate(response.created)}</ErrorBoundary></div>
    </div>
  );
};

export default LocationDetail;