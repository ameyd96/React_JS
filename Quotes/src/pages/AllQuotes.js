import { useEffect } from "react";

import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import NoQuotesFound from '../components/quotes/NoQuotesFound'

// const DUMMY_DATA = [
//   { id: "1", author: "Max", text: "Learning React" },
//   { id: "2", author: "Mini", text: "Learning Java" },
//   { id: "3", author: "Pro", text: "Learning Spring" },
//   { id: "4", author: "Sam", text: "Learning JS" },
// ];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if(error){
    return <p className="centered focused">{error}</p>
  }


  if(status === 'completed' && (!loadedQuotes || loadedQuotes.length ===0)){
    return <NoQuotesFound />
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
