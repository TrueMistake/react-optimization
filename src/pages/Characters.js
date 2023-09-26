import React, {useCallback, useRef, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";
import Select from "../components/Select/Select";
import {useGetResponse} from "../api/api";
import {sortASC} from "../helper/helper";

const Characters = () => {
  const [page, setPage] = useState(1);
  const url = 'https://rickandmortyapi.com/api/character'

  const {
    loading,
    error,
    response,
    hasMore
  } = useGetResponse(url, page, null);

  const [searchParams, setSearchParams] = useSearchParams({sort: 'asc'});
  const charactersSort = sortASC(response, searchParams.get('sort'));

  const changeSort = (val) => {
    setSearchParams({sort: val})
  }

  const observer = useRef();
  const lastNodeRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevState => prevState + 1);
      }
    })
    if (node) {
      observer.current.observe(node)
    }
  }, [loading, hasMore])

  return (
    <div>
      <Select sort={changeSort} val={searchParams.get('sort')}/>
      <div className="">
        {charactersSort.map((item, i) => {
          if (charactersSort.length - 5 === i + 1) {
            return (
              <Link to={`/characters/${item.id}`} className="block" key={item.id} ref={lastNodeRef}>
                <div className="text"><span>Имя:</span> {item.name}</div>
              </Link>
            )
          } else {
            return (
              <Link to={`/characters/${item.id}`} className="block" key={item.id}>
                <div className="text"><span>Имя:</span> {item.name}</div>
              </Link>
            )
          }
        })}
        {loading && <div>Загрузка...</div>}
        {error && <div>Что-то пошло не так...</div>}
      </div>
    </div>
  );
};

export default Characters;