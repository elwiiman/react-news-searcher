import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ListNews from "./components/ListNews";

function App() {
  const [category, setCategory] = useState("");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const consultAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=f3e358846e914726a956f278dda26a40`;
      const response = await fetch(url);
      const allNews = await response.json();
      setNews(allNews.articles);
    };

    consultAPI();
  }, [category]);

  return (
    <Fragment>
      <Header title="News Searcher"></Header>
      <div className="container white">
        <Form setCategory={setCategory}></Form>
        <ListNews news={news} />
      </div>
    </Fragment>
  );
}

export default App;
