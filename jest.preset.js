const nxPreset = require('@nrwl/jest/preset');

const workspacePreset = {
  testTimeout: 3000,
};

module.exports = { ...nxPreset, ...workspacePreset };
