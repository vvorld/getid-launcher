import aws from 'aws-sdk';
import envConfig from 'dotenv';
import semver from 'semver';

export const getListOfSdkFiles = async () => {
  envConfig.config();
  const {
    ACCESS_KEY_ID,
    SECRET_ACCESS_KEY,
    REGION,
    BUCKET,
    PREFIX
  } = process.env;
  aws.config.update({
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
    region: REGION,
    Bucket: BUCKET,
  });

  const s3 = new aws.S3();
  return await new Promise((res, rej) => {
    s3.listObjects({ Bucket: BUCKET, Prefix: PREFIX }, (err, data) => {
     if (err) {
       rej(err);
       return;
     }
     const { Contents } = data;
     res(Contents);
    });
  });
};

const getLatestVersion = (versions) => {
  const [latest] = versions.sort((prev, curr) => {
    const normalizedPrevVersion = semver.valid(semver.coerce(prev));
    const normalizedCurrVersion = semver.valid(semver.coerce(curr));
    return semver.gt(normalizedPrevVersion, normalizedCurrVersion) ? -1 : 1;
  });
  return latest;
};

export const getVersionsFromAwsResp = (fileList) => {
  const versions = Array.from(
    new Set(
      fileList
      .filter(({ Key }) => Key.endsWith('.js') && Key.match(/sdk\/getid-web-sdk-v(\d+\.\d+\.\d+).*/))
      .map(({ Key }) => {
        const { version } = Key.match(/sdk\/getid-web-sdk-(?<version>v\d+\.\d+\.\d+(-rc)?(-non-polyfills)?).*/).groups;
        return version;
      })
    )
  );
  const nonPolyfillVersions = versions
    .filter((version) => version.endsWith('non-polyfills') && !version.endsWith('rc-non-polyfills'));
  const latestNonPolyfillVersionsRC = getLatestVersion(
    versions.filter((version) => version.endsWith('rc-non-polyfills'))
  );
  const rcVersions = versions.filter((version) => version.endsWith('-rc'));
  const releaseVersions = versions.filter((version) => !version.endsWith('-rc') && !version.endsWith('non-polyfills'))
    .sort((prev, curr) => semver.gt(prev, curr) ? 1 : -1);
  const latestRCVersion = getLatestVersion(rcVersions);
  return [...nonPolyfillVersions, 'v6-non-polyfills', latestNonPolyfillVersionsRC, ...releaseVersions, latestRCVersion, 'v6'];
};
