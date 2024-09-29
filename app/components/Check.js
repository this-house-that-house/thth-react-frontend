import * as Styles from './index.css'
import CheckIcon from "../svgs/check.svg";
export default function ({ variant, checkboxVisible, children, ...props }) {
  return (
    <label className={Styles.checkWrapper({ variant })}>
      <label className={checkboxVisible ? Styles.checkbox : Styles.none}>
        <input type='checkbox' className={Styles.none} {...props} />
        <CheckIcon />
      </label>
      {children}
    </label>
  );
}
