import fs from 'fs/promises';
import { getListOfSdkFiles, getVersionsFromAwsResp } from './update-available-versions';

const run = async () => {
  const fileList = await getListOfSdkFiles();
  const versions = getVersionsFromAwsResp(fileList);
  const tsFile = `export type Version = '${versions.join('\'\n  | \'')}'\n`;
  fs.writeFile('src/versions.ts', tsFile, 'utf-8');
};

run();
