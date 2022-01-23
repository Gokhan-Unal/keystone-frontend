import { ApolloProvider } from '@apollo/client';
import Page from '../components/Page';
import withData from '../lib/withData';

function MyApp({ Component, pageProps, apollo }) {
  // console.log('apollo:', apollo);
  // console.log(pageProps);
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}

// - go and fetch all of the queries that are in all of the children components
// -for id's and etc.
MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  // console.log('pageProps1', pageProps);
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
    // console.log('pageProps2', pageProps);
  }
  // console.log('ctx is important <3', ctx);
  pageProps.query = ctx.query; // - get any query variables /products /to /id etc.
  // console.log('pageProps3', pageProps);
  return { pageProps };
};

// - give my client but inject apollo also.
export default withData(MyApp);
