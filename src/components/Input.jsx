import PropTypes from 'prop-types';

const Input = ({ inputName, inputType, inputPlaceholder, inputValue }) => {
  return (
    <input 
      type={inputType} 
      className="w-full placeholder:text-white mt-10 placeholder:font-light placeholder:text-lg placeholder:capitalize px-3 bg-purple-dozewell py-5 rounded-lg h-[55px] outline-none border-none text-gray-light-dozewell capitalize items-center justify-center" 
      name={inputName} 
      placeholder={inputPlaceholder} 
      value={inputValue}
    />
  );
};

Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string,
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  inputPlaceholder: '',
};

export default Input;