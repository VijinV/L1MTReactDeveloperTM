import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CountryCard from './CountryCard';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { useSelector } from 'react-redux';
import { fetchCountries, loadNextPage } from '../store/action';
import { LoadingSpinner } from './Spinner';

const CardGrid: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const {
        countries,
        loading,
        error,
        hasMore,
    } = useSelector((state: RootState) => state.countries);

    useEffect(() => {
        dispatch(fetchCountries({ page: 1, continent: 'All' }));
    }, [dispatch]);

    const handleLoadMore = () => {
        if (!loading && hasMore) {
            dispatch(loadNextPage());
        }
    };


    if (loading && countries.length === 0) {
        return (
            <div className="d-flex justify-content-center py-5">
                <LoadingSpinner variant="primary" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto py-8">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert">
                    <p>{error}</p>
                </div>
            </div>
        );
    }


    return (
        <Container className="py-4">
            <Row xs={1} sm={1} md={2} className="g-4">
                {countries.map((country) => (
                    <Col key={country.name}>
                        <CountryCard
                            name={country.name}
                            region={country.continent}
                            flagUrl={country.href.flag}
                        />
                    </Col>
                ))}
            </Row>

            {hasMore && (
                <div className="text-center mt-4">
                    <Button
                        onClick={handleLoadMore}
                        className="px-4 py-2 bg-primary rounded-0 text-white"
                    >
                        {
                            loading ? <LoadingSpinner variant='light' /> : "Load more"
                        }

                    </Button>
                </div>
            )}
        </Container>
    );
};

export default CardGrid;
