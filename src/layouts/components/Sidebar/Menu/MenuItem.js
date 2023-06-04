import PropTypes from 'prop-types';
import { useMatch, useResolvedPath } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, iconActive }) {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
    const handleActive = (nav) => {
        return cx('menu-item', { active: nav.isActive });
    };

    return (
        <NavLink className={handleActive} to={to}>
            {match ? iconActive : icon}
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    iconActive: PropTypes.node.isRequired,
};

export default MenuItem;
