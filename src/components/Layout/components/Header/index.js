import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faSignIn } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setSearchResult([]);
        }, 0);

        return () => clearTimeout(timeout);
    }, []);

    return <header className={cx('wrapper')}> 
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="Tiktok" />
            </div>

            <Tippy 
                interactive
                visible={searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            <AccountItem/>
                            <AccountItem/>
                            <AccountItem/>
                            <AccountItem/>
                            <AccountItem/>
                        </PopperWrapper>
                    </div>
                )}
            >
            <div className={cx('search')}>
                <input spellCheck={false} placeholder="Search accounts and videos" />
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark}/>
                </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>

                <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>

            </div>
            </Tippy>

            <div className={cx('action')}>
                <Button text>Upload</Button>
                <Button primary>Log in</Button>
            </div>

        </div>
    </header>
}

export default Header;