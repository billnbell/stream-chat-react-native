import React from 'react';

import { useTheme } from '../../../contexts/themeContext/ThemeContext';
import { Folder } from '../../../icons';

export const FileSelectorIcon: React.FC = () => {
  const {
    theme: {
      colors: { grey },
    },
  } = useTheme('FileSelectorIcon');

  return <Folder pathFill={grey} />;
};
