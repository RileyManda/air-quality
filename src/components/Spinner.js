import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => (
  <div className="spinner-container flex-container" data-testid="loading-spinner">
    <Spinner animation="border" variant="primary" role="status">
      <span className="visually-hidden white-text">Loading...</span>
    </Spinner>
  </div>
);

export default LoadingSpinner;
