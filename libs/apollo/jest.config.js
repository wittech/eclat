module.exports = {
  name: 'apollo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/apollo',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
