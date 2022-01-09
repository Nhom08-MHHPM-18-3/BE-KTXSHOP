module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9220cc69b4fa08ea30de81189e515735'),
  },
});
