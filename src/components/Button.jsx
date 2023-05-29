import PropTypes from 'prop-types';

export const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} hover:shadow-[0_0_20px_rgba(92,225,230,0.7)] ease-in duration-300 rounded-[10px]`}
    >
      Get Started
    </button>
  );
};

Button.propTypes = {
  styles: PropTypes.string,
};
