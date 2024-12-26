const CarListingSection = ({ cars }) => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-primary-700 mb-12">
                    Available Cars
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cars.length > 0 ? (
                        cars.map((car) => (
                            <div
                                key={car.id}
                                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
                            >
                                <img
                                    src={car.thumbnail}
                                    alt={`${car.make} ${car.model}`}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800">
                                        {car.make} {car.model}
                                    </h3>
                                    <p className="text-gray-600">{car.year}</p>
                                    <p className="text-accent-500 font-semibold text-lg">
                                        ${car.price.toLocaleString()}
                                    </p>
                                    <button className="mt-4 bg-primary-700 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center col-span-full">
                            No cars match your search criteria.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CarListingSection;
