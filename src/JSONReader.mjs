import { createTextReader } from './TextReader.mjs';

export const createJSONReader = () => {
  const read = createTextReader();
  return (readableStream) => read(readableStream).then((text) => JSON.parse(text));
};

export default createJSONReader;
