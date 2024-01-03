import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const object = {};
  uploadPhoto().then((res) => {
    object.photo = res;
  }).catch(() => {
    object.photo = null;
    object.user = null;
  });
  createUser().then((res) => {
    object.user = res;
  }).catch(() => {
    object.photo = null;
    object.user = null;
  });
  return object;
}
