export const createApp = (options) => {
  const { observe } = options;

  return observe((request, response) => response.end());
};

export default createApp;
