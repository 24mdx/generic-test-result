import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';

export default function Form({ children }) {
    const [name, setName] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [type, setType] = useState();
    const [qr, setQr] = useState();

    useEffect(() => {
        if (name && date && time && type) {
            const queryRaw = [date, time, type, name].join(' ');
            const query = btoa(queryRaw);
            const prefix = 'https://24mdx.github.io/generic-test-result/result/?';
            setQr(`${prefix}${query}`);
        } else {
            setQr();
        }
    }, [name, date, time, type]);

    const handleNameChange = (event) => {
        setName(event.currentTarget.value);
    };
    const handleDateChange = (event) => {
        setDate(event.currentTarget.value);
    };
    const handleTimeChange = (event) => {
        setTime(event.currentTarget.value);
    };
    const handleTypeChange = (event) => {
        setType(event.currentTarget.value);
    };

    return (
        <>
            <div className="py-2 px-4">
                <div className="font-semibold text-gray-400">Probant</div>
                <input name="name" onChange={handleNameChange} className="py-3 px-4 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Name" />
            </div>
            <div className="py-2 px-4">
                <div className="font-semibold text-gray-400">Datum</div>
                <input name="date" onChange={handleDateChange} className="py-3 px-4 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600" type="date" placeholder="Datum" />
            </div>
            <div className="py-2 px-4">
                <div className="font-semibold text-gray-400">Uhrzeit</div>
                <input name="time" onChange={handleTimeChange} className="py-3 px-4 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600" type="time" placeholder="Uhrzeit" />
            </div>
            <div className="py-2 px-4">
                <div className="font-semibold text-gray-400">Typ</div>
                <select onChange={handleTypeChange} value={type}>
                    <option value=""></option>
                    <option value="agt">Antigen-Schnelltest</option>
                    <option value="pcr">Polymerase-Kettenreaktion (PCR)</option>
                </select>
            </div>

            {Boolean(qr) && (
                <div className="py-4 px-4">
                    <div className="flex justify-center py-2">
                        <span>{'-->'}</span><a href={qr}>Klick hier</a><span>{'<--'}</span>
                    </div>
                    <div className="flex justify-center">
                        <QRCode value={qr} />
                    </div>
                </div>
            )}
        </>
    );
}