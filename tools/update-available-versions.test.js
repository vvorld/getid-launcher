import { getVersionsFromAwsResp } from './update-available-versions';

const listFromAws = [
    {
      Key: 'sdk/getid-web-sdk-v6-demo.min.js',
      LastModified: '2021-02-24T14:04:21.000Z',
      ETag: '"saasads"',
      Size: 1066283,
      StorageClass: 'STANDARD'
    },
    {
      Key: 'sdk/getid-web-sdk-v6.1.0-non-polyfills.min.js',
      LastModified: '2021-12-15T12:22:38.000Z',
      ETag: '"asdas"',
      Size: 1492334,
      StorageClass: 'STANDARD'
    },
    {
      Key: 'sdk/getid-web-sdk-v6.1.0-rc-non-polyfills.min.js',
      LastModified: '2021-12-15T12:22:38.000Z',
      ETag: '"asdas"',
      Size: 1492334,
      StorageClass: 'STANDARD'
    },
    {
      Key: 'sdk/getid-web-sdk-v6.1.1-rc-non-polyfills.min.js',
      LastModified: '2021-12-15T12:22:38.000Z',
      ETag: '"asdas"',
      Size: 1492334,
      StorageClass: 'STANDARD'
    },
    {
      Key: 'sdk/getid-web-sdk-v6.2.2.min.js',
      LastModified: '2021-10-28T13:29:03.000Z',
      ETag: '"674cbd75da330572d52b6746fe13f592"',
      Size: 1037412,
      StorageClass: 'STANDARD'
    },
    {
      Key: 'sdk/getid-web-sdk-v6.7.0-rc.min.js',
      LastModified: '2021-10-28T13:29:03.000Z',
      ETag: '"674cbd75da330572d52b6746fe13f592"',
      Size: 1037412,
      StorageClass: 'STANDARD'
    },
    {
      Key: 'sdk/getid-web-sdk-v6.2.1.min.js',
      LastModified: '2021-10-28T13:29:03.000Z',
      ETag: '"aasdasdas"',
      Size: 1037412,
      StorageClass: 'STANDARD'
    },
    {
      Key: 'sdk/getid-web-sdk-v6.2.1-rc.min.js',
      LastModified: '2021-10-28T13:29:03.000Z',
      ETag: '"aasdasdas"',
      Size: 1037412,
      StorageClass: 'STANDARD'
    },
    {
      Key: 'sdk/getid-web-sdk-v6.1.0.min.js',
      LastModified: '2021-07-08T11:38:49.000Z',
      ETag: '"zxzzzsdv"',
      Size: 945981,
      StorageClass: 'STANDARD'
    },
    {
      Key: 'sdk/getid-web-sdk-v6.2.0.min.js',
      LastModified: '2021-10-28T13:29:03.000Z',
      ETag: '"zxcxzc"',
      Size: 1037412,
      StorageClass: 'STANDARD'
    },
  ];
describe('parse list from aws', () => {
  it('sorted unique versions', () => {
    const result = getVersionsFromAwsResp(listFromAws);
    expect(result).toStrictEqual([
      'v6.1.0-non-polyfills',
      'v6-non-polyfills',
      'v6.1.1-rc-non-polyfills',
      'v6.1.0',
      'v6.2.0',
      'v6.2.1',
      'v6.2.2',
      'v6.7.0-rc',
      'v6'
    ]);
  });
});
