export const schema = Object.freeze({
  properties: {
    code: {
      maxLength: 6,
      minLength: 6,
      type: 'string'
    },
    via: {
      format: 'uuid',
      type: 'string'
    }
  },
  required: [
    'code',
    'via'
  ],
  type: 'object'
});

export default schema;
