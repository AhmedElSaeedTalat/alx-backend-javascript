import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const object = {};
  uploadPhoto().then((res) => {
    object.photo = res;
  });
  createUser().then((res) => {
    object.user = res;
  });
  return object;
}
