const defaultUserInfo = {
  name: 'Demo User',
  image: 'https://docs.atlassian.com/aui/8.4.1/docs/images/avatar-person.svg'
};

export default function reducer(state = {
  user: defaultUserInfo
}, action) {
  return state;
}