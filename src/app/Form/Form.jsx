import React from 'react';
import './form.css';

const Form = () => {
    return (
        <section className="mern-form">
            <form className="form">
                <div className="form-row">
                    <div className="flex-column">
                        <label>Name</label>
                        <div className="inputForm">
                            <input
                                placeholder="Enter your Name"
                                className="input"
                                type="text"
                                name="name"
                            />
                        </div>
                    </div>

                    <div className="flex-column">
                        <label>Email</label>
                        <div className="inputForm">
                            <input
                                placeholder="Enter your Email"
                                className="input"
                                type="text"
                                name="email"
                            />
                        </div>
                    </div>
                </div>



                <div className="form-row">
                    <div className="flex-column">
                        <label>Pickup Location</label>
                        <div className="inputForm">
                            <input
                                placeholder="Enter your Pickup Location"
                                className="input"
                                type="text"
                                name="PickupLocation"
                            />
                        </div>
                    </div>

                    <div className="flex-column">
                        <label>Drop Location</label>
                        <div className="inputForm">
                            <input
                                placeholder="Enter your Drop Location"
                                className="input"
                                type="text"
                                name="DropLocation"
                            />
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="flex-column">
                        <label>Pickup Date</label>
                        <div className="inputForm">
                            <input
                                placeholder="Enter your Pickup Date"
                                className="input"
                                type="date"
                                name="PickupDate"
                            />
                        </div>
                    </div>
                    <div className="flex-column">
                        <label>Drop Date</label>
                        <div className="inputForm">
                            <input
                                placeholder="Enter your Pickup Date"
                                className="input"
                                type="date"
                                name="PickupDate"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex-column">
                    <label>Number</label>
                    <div className="inputForm">
                        <input
                            placeholder="Enter your Number"
                            className="input"
                            type="number"
                            name="number"
                        />
                    </div>
                </div>

                <button className="button-submit">Submit</button>
            </form>
        </section>
    );
};

export default Form;
