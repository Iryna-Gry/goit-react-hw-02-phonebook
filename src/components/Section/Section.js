import PropTypes from 'prop-types';
import './Section.css';

export const Section = ({ title, className, children }) => {
  return (
    <section className={className}>
      <h2 className="Section__title">{title}</h2>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.PropTypes.string.isRequired,
};
