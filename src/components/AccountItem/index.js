import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}> 
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/88764e4da16ebdc7d3e84378c1705af1~c5_100x100.jpeg?x-expires=1677240000&x-signature=8LFVnU5Sqv2dK%2BJBIlNt1V0aNkM%3D" alt="Hoaa"/>
            <div className={cx('info')}> 
                <h4 className={cx('name')}>
                    <span> nguyen van A </span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}> nguyenvanA</span>
            </div>
        </div>
    )
}

export default AccountItem;