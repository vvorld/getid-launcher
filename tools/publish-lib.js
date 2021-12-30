import aws from 'aws-sdk';
import envConfig from 'dotenv';
import fs from 'fs/promises';

const LIB_FILE_NAME = 'getid-web-sdk-launcher-v6.min.js';
const PATH_TO_LIB = `${__dirname}/../lib/${LIB_FILE_NAME}`;
const uploadLib = async () => {
  envConfig.config();
  const {
    ACCESS_KEY_ID,
    SECRET_ACCESS_KEY,
    REGION,
    BUCKET,
  } = process.env;
  aws.config.update({
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
    region: REGION,
    Bucket: BUCKET,
  });
  const s3 = new aws.S3();
  const fileLib = await fs.readFile(PATH_TO_LIB, 'utf-8');
  const params = {
    Bucket: `${BUCKET}/sdk`,
    Key: LIB_FILE_NAME,
    Body: fileLib,
    ACL: 'public-read',
    ContentType: 'text/javascript',
  };
  s3.upload(params, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('file successfully uploaded', result);
  });
};

uploadLib();
