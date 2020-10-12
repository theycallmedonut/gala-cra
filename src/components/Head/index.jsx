import * as ReactDOM from 'react-dom';

const headRoot = document.head;

const Head = ({ children }) => ReactDOM.createPortal(children, headRoot);

export default Head;
