import fs from 'fs/promises';
import semver from 'semver';
import { getListOfSdkFiles, getVersionsFromAwsResp } from './update-available-versions';

const getLatestVersion = (versions) => versions
  .filter((version) => /\d+\.+\d+\.\d+$/.test(version))
  .reduce((prevVersion, currVersion) =>
    semver.gte(prevVersion, currVersion) ? prevVersion : currVersion,
   versions[0]);

const run = async () => {
  const fileList = await getListOfSdkFiles();
  const versions = getVersionsFromAwsResp(fileList);
  const tsFile = `export type Version = '${versions.join('\'\n  | \'')}'\n`;
  const latestVersion = getLatestVersion(versions);
  try {
      await fs.writeFile('src/versions.ts', tsFile, 'utf-8');
      await fs.writeFile('src/latest-version.ts', `export const latestVersion = '${latestVersion}';\n`, 'utf-8');
  } catch (e) {
    console.log(e);
  }
};

run();
