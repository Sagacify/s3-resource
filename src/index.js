import AWS from 'aws-sdk';
import BPromise from 'bluebird';
const log = require('saga-logger').create({ module: 's3-resource' });

let s3;
export const init = (awsConfig = {}, s3Config = {}) => {
  AWS.config.update(awsConfig);
  s3 = new AWS.S3(s3Config);
};

export const upload = params => new BPromise((resolve, reject) => {
  log.debug('S3_UPLOAD', null, params);
  s3.upload(params, err => {
    if (err) {
      log.error('S3_UPLOAD_FAIL', err, params);
      return reject(err);
    }

    log.debug('S3_UPLOAD_SUCCESS', null, params);
    resolve();
  });
});

export const getObject = params => new BPromise((resolve, reject) => {
  log.debug('S3_GET_OBJECT', null, params);
  s3.getObject(params, (err, data) => {
    if (err) {
      log.error('S3_GET_OBJECT_FAIL', err, params);
      return reject(err);
    }

    log.debug('S3_GET_OBJECT_SUCCESS', data, params);
    resolve(data);
  });
});
