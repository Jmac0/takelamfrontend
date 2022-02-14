import { useState } from 'react';
// Toggle boolean value hook
function UseToggleState(defaultValue = false): [boolean, Function] {
  const [state, setState] = useState(defaultValue);

  const toggle = (): void => {
    setState(!state);
  };

  return [state, toggle];
}

export default UseToggleState;
