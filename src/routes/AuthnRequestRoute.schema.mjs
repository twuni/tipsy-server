export const schema = Object.freeze({
  properties: {
    email: {
      format: 'email',
      type: 'string'
    },
    state: {
      type: 'string'
    }
  },
  required: [
    'email'
  ],
  type: 'object'
});

export default schema;
