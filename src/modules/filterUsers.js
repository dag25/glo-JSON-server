import { render } from './render';
export const filterUsers = (user) => {
  const btnIsChildren = document.getElementById('btn-isChildren');
  const btnIsPermissions = document.getElementById('btn-isPermissions');
  const btnIsAll = document.getElementById('btn-isAll');

  btnIsChildren.addEventListener('click', () => {
    userService.filterUsers('children').then((users) => {
      render(users);
    })
  });
  btnIsPermissions.addEventListener('click', () => {
    userService.filterUsers('permission').then(users => {
			render(users);
		});
  });
  btnIsAll.addEventListener('click', () => {
    userService.getUsers('children').then(users => {
			render(users);
		});
  });
};
