import { useEffect, useRef } from 'react';
import { isNullOrUndefined } from '~/utilities/functions/general';

function usePreviousState(value) {
  const ref = useRef();
  useEffect(() => { ref.current = isNullOrUndefined(value) ? {} : value; });

  return ref.current;
}

export default usePreviousState;
