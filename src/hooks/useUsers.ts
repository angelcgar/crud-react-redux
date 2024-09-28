import { type UserId, deleteUserById } from '../store/users/slice';
import { useAppDispatch } from './store';

export function userAppActions() {
  const dispatch = useAppDispatch();

  const removeUser = (id: UserId) => {
    dispatch(deleteUserById(id));
  };

  return { removeUser };
}
