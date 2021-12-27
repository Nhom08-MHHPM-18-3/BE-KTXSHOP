module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ebc063dcd922c327ca7dd18189d71579'),
  },
});
