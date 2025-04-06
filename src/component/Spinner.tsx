import Spinner from 'react-bootstrap/Spinner';

interface LoadingSpinnerProps {
  variant?: 'primary' | 'light'
}

export const LoadingSpinner = ({ variant = "primary" }: LoadingSpinnerProps) => (
  <div className="d-flex justify-content-center">
    <Spinner animation="border" variant={variant} role="status" size='sm' >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
);
