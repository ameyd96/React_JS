import QuoteList from "../components/quotes/QuoteList";

const DUMMY_DATA = [
  { id: "1", author: "Max", text: "Learning React" },
  { id: "2", author: "Mini", text: "Learning Java" },
  { id: "3", author: "Pro", text: "Learning Spring" },
  { id: "4", author: "Sam", text: "Learning JS" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_DATA} />;
};

export default AllQuotes;
