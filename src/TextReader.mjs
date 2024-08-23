export const createTextReader = () => (readableStream) => new Promise((resolve, reject) => {
  const chunks = [];

  readableStream.on('readable', () => {
    for (let chunk = readableStream.read(); chunk; chunk = readableStream.read()) {
      chunks.push(chunk);
    }
  });

  readableStream.on('error', reject);

  readableStream.on('end', () => {
    resolve(chunks.join(''));
  });
});

export default createTextReader;
