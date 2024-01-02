export default async function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
    return { status: 200, body: 'success' };
  });
  return promise.catch(() => new Error());
}
