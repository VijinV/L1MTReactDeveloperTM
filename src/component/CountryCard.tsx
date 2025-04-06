import React from 'react';
import { Card } from 'react-bootstrap';

interface CountryCardProps {
  name: string;
  region: string;
  flagUrl?: string;
  onClick?: () => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  name,
  region,
  flagUrl = '/api/placeholder/24/24',
  onClick
}) => {
  return (
    <Card
      className="mb-3 border-2 rounded-0 w-100 border-primary flex-grow-1"
      style={{ cursor: onClick ? 'pointer' : 'default', boxShadow: '7px 8px 1px rgb(221 221 221) ', }}
      onClick={onClick}
    >
      <Card.Body className="d-flex flex-row align-items-center p-2">
        <div className="me-3 d-flex align-items-center justify-content-center bg-light" style={{ minWidth: '80px', height: '80px' }}>
          <img
            src={flagUrl}
            alt={`${name} flag`}
            className="img-fluid"
            style={{ objectFit: 'contain', maxHeight: '100%' }}
          />
        </div>
        <div className="pb-2">
          <Card.Title className="mb-0 text-dark fs-5">
            {name}
          </Card.Title>
          <Card.Text className="text-muted mb-0 small">
            {region}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;
