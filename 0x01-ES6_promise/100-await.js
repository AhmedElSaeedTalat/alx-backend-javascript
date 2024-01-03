import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const object = {};
  try {
    uploadPhoto().then((res) => {
      object.photo = res;
    });
  } catch (error) {
    object.photo = null;
  }
  try {
    createUser().then((res) => {
      object.user = res;
    });
  } catch (error) {
    object.user = null;
  }
  return object;
}
