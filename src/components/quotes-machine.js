import React from 'react'
import '../stylesheets/styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useSelector } from 'react-redux';
import { returnQuote } from './quotes';
import { useDispatch } from 'react-redux';
import { newQuote } from '../features/quotes';

export default function QuotesMachine() {
    const quotes = useSelector((state) => state.quotes);
    const dispatch = useDispatch();

    const getNewQuote = () => {
        let quoteArr = returnQuote();
        console.log(quoteArr);
        dispatch(newQuote({
            quote : quoteArr[1],
            author : quoteArr[0]
        }))
    }

    return (
        <div className="container-fluid" id="quote-box">
            <h2 id="text">{quotes.quote}</h2>
            <h3 id="author">{quotes.author}</h3>
            <div className="row buttons">
                <div className="col-md-6">
                    <a href="#" id="tweet-quote" title="Tweet this quote!"><FontAwesomeIcon icon={faTwitter} /><span> </span>Tweet this!</a>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-primary" id="new-quote" onClick={getNewQuote} >New Quote</button>
                </div>
            </div>
        </div>
    )
}
