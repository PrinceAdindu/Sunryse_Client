import { useState } from 'react';
import PropTypes from 'prop-types';
import StyledButton from '../styledButton/StyledButton';

import styles from './MultiButton.module.scss';

MultiButton.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      baseClassname: PropTypes.string,
      selectedClassname: PropTypes.string,
    }),
  ).isRequired,
  initial: PropTypes.shape({
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    baseClassname: PropTypes.string,
    selectedClassname: PropTypes.string,
  }),
};

export default function MultiButton({ buttons, initial = '' }) {
  const [selected, setSelected] = useState(
    initial || {
      text: '',
      onClick: () => {},
      baseClassname: '',
      disabledClassname: '',
    },
  );

  const onButtonClick = (button) => {
    setSelected(button);
    button.onClick(button);
  };

  return (
    <div className={styles.buttonsContainer}>
      {buttons.map((button) => (
        <StyledButton
          key={button.text}
          text={button.text}
          onClick={() => onButtonClick(button)}
          baseClassname={
            button.text === selected.text
              ? button.selectedClassname
              : button.baseClassname
          }
        />
      ))}
    </div>
  );
}
