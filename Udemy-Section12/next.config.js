const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
        env: {
            mongodb_username: 'vuyiswadiale',
            mongodb_password: 'MpB3cv0xAx5sZJTY',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'my-site-dev',
        },
      };
}

    return {
    env: {
        mongodb_username: 'vuyiswadiale',
        mongodb_password: 'MpB3cv0xAx5sZJTY',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site',
    },
  };
};