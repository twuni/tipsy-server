export const schema = Object.freeze({
  properties: {
    code: {
      maxLength: 6,
      minLength: 6,
      pattern: '^[0-9]+$',
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
