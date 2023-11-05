import PropTypes from "prop-types";

const MaxWidth = ({children}) => {
 return (
  <div className=" max-w-7xl mx-auto px-10">
   {children}
  </div>
 );
};
MaxWidth.propTypes={
 children:PropTypes.node,
}
export default MaxWidth;