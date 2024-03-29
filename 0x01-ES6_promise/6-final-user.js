import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => result.map((results) => ({
      status: results.status,
      value: results.status === 'fulfilled' ? results.value : results.reason,
    })));
}
