import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote =() => {
    const addQuotehandler =(quoteData) =>{
console.log(quoteData);
    }
    return <QuoteForm  onAddQuote={addQuotehandler}/>;
}


export default NewQuote;