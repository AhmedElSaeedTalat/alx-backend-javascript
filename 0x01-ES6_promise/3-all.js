import { createUser, uploadPhoto } from './utils';

export default async function handleProfileSignup() {
  try {
    const results = await Promise.all([uploadPhoto(), createUser()]);
    for (const item of results) {
      for (const [key, value] of Object.entries(item)) {
        if (key === 'firstName' || key === 'lastName' || key === 'body') {
          console.log(value);
        }
      }
    }
  } catch (error) {
    console.log('Signup system offline');
  }
}
