import React, { useState, useEffect } from "react";
import axios from "axios";

const CarListingSection = ({ filters }) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            const response = await axios.get("/api/cars");
            setCars(response.data.cars);
        };
        fetchCars();
    }, []);

    const filteredCars = cars.filter((car) => {
        return (
            (!filters.make || car.make === filters.make) &&
            (!filters.model || car.model === filters.model) &&
            (!filters.year || car.year.toString() === filters.year) &&
            (!filters.minPrice || car.price >= filters.minPrice) &&
            (!filters.maxPrice || car.price <= filters.maxPrice)
        );
    });

    return (
        <section>
            <h2>Available Cars</h2>
            <div>
                {filteredCars.length > 0 ? (
                    filteredCars.map((car) => (
                        <div key={car.id}>
                            <h3>
                                {car.make} {car.model} ({car.year})
                            </h3>
                            <p>{car.price}</p>
                            <img src={`/storage/${JSON.parse(car.images)[0]}`} alt="Car" />
                        </div>
                    ))
                ) : (
                    <p>No cars found.</p>
                )}
            </div>
        </section>
    );
};

export default CarListingSection;
