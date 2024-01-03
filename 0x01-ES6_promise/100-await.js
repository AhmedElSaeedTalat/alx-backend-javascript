import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const object = {};
  try {
    uploadPhoto().then((res) => {
      object.photo = res;
    });
    createUser().then((res) => {
      object.user = res;
    });
    return object;
  } catch (error) {
    object.user = null;
    object.photo = null;
    return object;
  }
}
