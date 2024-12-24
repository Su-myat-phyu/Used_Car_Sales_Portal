import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";


const CarFilterSidebar = () => {
    const [filters, setFilters] = useState({
        make: "",
        model: "",
        registrationYear: "",
        priceRange: [0, 50000],
        
    });

    const handleClearFilters = () => {
        setFilters({
            make: "",
            model: "",
            registrationYear: "",
            priceRange: [0, 50000],
            
        });
    };

    return (
        <aside className="bg-white shadow-md rounded-lg p-4 w-full md:w-64">
            <h2 className="text-lg font-bold mb-4">Filters</h2>

            {/* Make Filter */}
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full p-2 border-b focus:outline-none">
                            <span>Make</span>
                            <ChevronUpIcon
                                className={`${
                                    open ? "rotate-180 transform" : ""
                                } h-5 w-5 text-gray-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="pt-2">
                            <select
                                value={filters.make}
                                onChange={(e) =>
                                    setFilters({ ...filters, make: e.target.value })
                                }
                                className="w-full p-2 border rounded focus:outline-none"
                            >
                                <option value="">Select Make</option>
                                <option value="Toyota">Toyota</option>
                                <option value="Honda">Honda</option>
                                <option value="Ford">Ford</option>
                                <option value="BMW">BMW</option>
                            </select>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            {/* Model Filter */}
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full p-2 border-b mt-2 focus:outline-none">
                            <span>Model</span>
                            <ChevronUpIcon
                                className={`${
                                    open ? "rotate-180 transform" : ""
                                } h-5 w-5 text-gray-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="pt-2">
                            <select
                                value={filters.model}
                                onChange={(e) =>
                                    setFilters({ ...filters, model: e.target.value })
                                }
                                className="w-full p-2 border rounded focus:outline-none"
                            >
                                <option value="">Select Model</option>
                                <option value="Camry">Camry</option>
                                <option value="Civic">Civic</option>
                                <option value="Mustang">Mustang</option>
                                <option value="X5">X5</option>
                            </select>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            {/* Registration Year Filter */}
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full p-2 border-b mt-2 focus:outline-none">
                            <span>Registration Year</span>
                            <ChevronUpIcon
                                className={`${
                                    open ? "rotate-180 transform" : ""
                                } h-5 w-5 text-gray-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="pt-2">
                            <select
                                value={filters.registrationYear}
                                onChange={(e) =>
                                    setFilters({
                                        ...filters,
                                        registrationYear: e.target.value,
                                    })
                                }
                                className="w-full p-2 border rounded focus:outline-none"
                            >
                                <option value="">Select Year</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                            </select>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            {/* Price Range Filter */}
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full p-2 border-b mt-2 focus:outline-none">
                            <span>Price Range</span>
                            <ChevronUpIcon
                                className={`${
                                    open ? "rotate-180 transform" : ""
                                } h-5 w-5 text-gray-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="pt-2">
                            <div className="flex justify-between">
                                <input
                                    type="number"
                                    placeholder="Min"
                                    value={filters.priceRange[0]}
                                    onChange={(e) =>
                                        setFilters({
                                            ...filters,
                                            priceRange: [
                                                e.target.value,
                                                filters.priceRange[1],
                                            ],
                                        })
                                    }
                                    className="w-20 border p-2 rounded focus:outline-none"
                                />
                                <input
                                    type="number"
                                    placeholder="Max"
                                    value={filters.priceRange[1]}
                                    onChange={(e) =>
                                        setFilters({
                                            ...filters,
                                            priceRange: [
                                                filters.priceRange[0],
                                                e.target.value,
                                            ],
                                        })
                                    }
                                    className="w-20 border p-2 rounded focus:outline-none"
                                />
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            

            {/* Clear Filters Button */}
            <button
                onClick={handleClearFilters}
                className="w-full mt-4 bg-red-500 text-white py-2 rounded hover:bg-red-400 transition"
            >
                Clear Filters
            </button>
        </aside>
    );
};

export default CarFilterSidebar;
