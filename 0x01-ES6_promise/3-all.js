import { createUser, uploadPhoto } from "./utils";

export default function handleProfileSignup() {
  const api1 = uploadPhoto();
  const api2 = createUser();

  Promise.all([api1, api2]).then((data) => {
    const { body } = data[0];
    console.log(`${body} ${data[1].firstName} ${data[1].lastName}`)
  }).catch(() => {
    console.log('ddd');
  });
}
