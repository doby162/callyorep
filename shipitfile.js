module.exports = (shipit) => {
  require('shipit-deploy')(shipit)

  shipit.initConfig({
    default: {
      workspace: '/tmp/callyorep-workspace',
      deployTo: '/var/www/callyorep',
      repositoryUrl: 'https://github.com/openwichita/callyorep',
      ignores: ['.git', 'node_modules'],
      keepReleases: 3,
      deleteOnRollback: false,
      shallowClone: true
    },
    production: {
      servers: 'deploy@callyorep.com'
    }
  })
  
}
