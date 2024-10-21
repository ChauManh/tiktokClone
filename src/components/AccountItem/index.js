import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="" alt="Manh" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Chau Duc Manh</span>
                    <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle} />
                </p>
                <span className={cx('userName')}>manhmh102</span>
            </div>
        </div>
    );
}

export default AccountItem;