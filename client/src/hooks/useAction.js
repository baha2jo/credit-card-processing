import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

/**
 * This hook will allow you easly dispatch actions from the component function
 * @param {*} action
 */
const useAction = action => {
  const dispatch = useDispatch();
  const actionCallBack = useCallback((args = []) => dispatch(action(...args)), [
    dispatch,
    action
  ]);

  return [actionCallBack];
};

export default useAction;
