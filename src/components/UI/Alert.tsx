import classes from './Alert.module.scss';
import { AlertSeverity } from '../../types';

const Alert: React.FC<{
  severity?: AlertSeverity;
  className?: string;
}> = ({ severity, className: classNameProps, children: alertText }) => {
  let className = classes['alert'];

  severity === AlertSeverity.SEVERE &&
    (className += ` ${classes['alert--error']}`);

  classNameProps && (className += ` ${classNameProps}`);

  return <p className={className}>{alertText}</p>;
};

export default Alert;
