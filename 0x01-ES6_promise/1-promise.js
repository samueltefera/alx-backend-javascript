export default function getFullResponseFromAPI(answer) {
  return new Promise((resolve, rejects) => {
    if (answer) {
      resolve({ status: 200, body: 'Success' });
    }
    rejects(new Error('ddd'));
  });
}
