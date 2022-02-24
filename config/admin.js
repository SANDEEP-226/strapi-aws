module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1fdaa45f87f65e59e26110d6aaf36170'),
  },
});
