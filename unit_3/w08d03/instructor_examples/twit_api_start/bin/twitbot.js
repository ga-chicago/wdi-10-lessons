const Twit = require('twit');

const T = new Twit({
  consumer_key:         'GGXjItT2DIIuCqwunS2cEM84I',
  consumer_secret:      'cLpCGro4elUMrs6wB3hmSBEg2xqIV7NCTcZVeNvXuHjsKI9ml8',
  access_token:         '3373072335-HENAgtLucH7fbDHcR7tRYRRH6jLMd7KveE9dnNl',
  access_token_secret:  'MOl10OQdwQIJR1hSRNbw9cWjVe4Fe8UcrJC0MThgUaJWK',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

// searcch for puppies
// arguments
// 1. end point
// 2. parameters object
// 3. the callback function for after we get a response from the twitter endpoint

const getTweets = (res) => {

  const response = (res, data) => {
    res.send(data)
  }


T.get('search/tweets', { q: 'dog since:2015-07-11', count: 10 })
                    .catch((err) => {
                      console.log(err)
                    })
                    .then((result) => {
                       let tweets = result.data.statuses;
                        console.log(tweets)

                        response(res, tweets)

                    });

}


module.exports = getTweets;

// promise syntax


