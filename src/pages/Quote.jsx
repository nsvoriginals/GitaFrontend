import React, { useEffect, useState } from 'react';
import './Quote.css';

function Quote() {
    // Default object structure
    const defaultQuote = {
        id: null, // Default value, assuming id might be null initially
        text: 'Fill your mind with me; love me; serve me; worship me always. Seeking me in your heart, you will at last be united with me', // Default text while loading or if there's an issue
    };

    const [quote, setQuote] = useState(defaultQuote); // Initialize quote with default object
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const URL = 'https://gitabackend-fj01.onrender.com/api/quote'; // API URL

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL); // Fetch data from the API
                if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                }
                const data = await response.json(); // Parse the response as JSON

                // Log the response to inspect its structure
                console.log('API response:', data);

                setQuote(data); // Update the state with the fetched quote
                setLoading(false); // Set loading to false
            } catch (err) {
                console.error('Error fetching data:', err); // Log the error to the console
                setError(err); // Set error if request fails
                setLoading(false); // Set loading to false
            }
        };

        fetchData(); // Call the fetch function
    }, [URL]); // Dependency array

  
    return (
    <>
      <div id="web2">
            <div id="main2">
                <h1>{quote.text}</h1>
            </div>
        </div>
    </>
    );
}

export default Quote;
