import { ApolloProvider } from '@apollo/client';
import Page from '../components/Page';
import withData from '../lib/withData';

function MyApp({ Component, pageProps, apollo }) {
  // console.log('apollo:', apollo);
  console.log(pageProps);
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}

// - give my client but inject apollo also.
export default withData(MyApp);
