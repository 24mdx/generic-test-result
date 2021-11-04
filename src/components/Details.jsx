import React, { useState, useEffect } from 'react';
import humanizeDuration from 'humanize-duration';
import QRCode from "react-qr-code";

export default function Details() {
    const [name, setName] = useState();
    const [dateTime, setDateTime] = useState();
    const [type, setType] = useState();
    const [ago, setAgo] = useState();
    const [tid, setTid] = useState();
    const [qr, setQr] = useState();
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        var w = window, s = w.location.search, r, e, d, t, a, n;
        if (s && s.substr(0, 1) === '?') {
            r = s.substr(1),
                e = atob(r),
                d = e.substr(0, 10),
                t = e.substr(11, 5),
                a = e.substr(17, 3);
                n = e.substr(21);
            
            setTid(r);

            setName(n);
            setDateTime(`${d} - ${t} Uhr`);
            setType(a === 'agt' ? 'Antigen-Schnelltest' : a === 'pcr' ? 'Polymerase-Kettenreaktion (PCR)' : null );

            const ts = Date.parse(`${d}T${t}:00`);
            const now = Date.now();
            const dur = now - ts;
            setAgo(humanizeDuration(dur, { language: 'de', units: ['h', 'm'], round: true }));

            setQr(window.location.href);

            setComplete(true);
        }
    }, []);


    return (
        <>
            {!complete ? (
                <div className="bg-gray-300 py-6 text-gray-300">
                    <div className="container mx-auto flex flex-col">
                        <div className="flex place-content-center py-4">
                            <div className="flex-initial text-8xl ">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"></path><path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"></path></svg>
                            </div>
                        </div>
                        <div className="flex place-content-center py-4">
                            <div className="flex-initial">
                                <span className="font-semibold text-4xl tracking-wider">{' - '}</span>
                            </div>
                        </div>
                        <div className="flex place-content-center py-4">
                            <div className="flex-initial">
                                <div className="py-2 px-4 font-semibold">...</div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-green-400 py-6 text-white">
                    <div className="container mx-auto flex flex-col">
                        <div className="flex place-content-center py-4">
                            <div className="flex-initial text-8xl ">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"></path><path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path></svg>
                            </div>
                        </div>
                        <div className="flex place-content-center py-4">
                            <div className="flex-initial">
                                <span className="font-semibold text-4xl tracking-wider underline">NEGATIV</span>
                            </div>
                        </div>
                        <div className="flex place-content-center py-4">
                            <div className="flex-initial">
                                <div className="py-2 px-4 bg-gray-600 text-white font-semibold rounded-lg">Getestet vor <span className="text-green-300">{ago}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="bg-white py-6">
                <div className="container mx-auto">
                    <div className="py-2 px-4">
                        <div className="font-semibold text-gray-400">Probant</div>
                        <div>{name || '-'}</div>
                    </div>
                    <div className="py-2 px-4">
                        <div className="font-semibold text-gray-400">Termin</div>
                        <div>{dateTime || '-'}</div>
                    </div>
                    <div className="py-2 px-4">
                        <div className="font-semibold text-gray-400">Test-Typ</div>
                        <div>{type || '-'}</div>
                    </div>
                </div>
            </div>
            {complete && (
                <>
                    <div className="bg-white">
                        <div className="container mx-auto px-4">
                            <div className="bg-green-200 p-4">
                                <p>Sie wurden <span className="underline uppercase">Negativ</span> auf Covid-19 getestet.</p>
                                <p className="mt-2">Seien Sie dennoch vorsichtig und halten Sie die AHA+L+A Regeln ein.</p>
                                <p className="mt-2">ABSTAND halten. <br />HYGIENE beachten. <br />ALLTAGSMASKE tragen. <br />Regelmäßig LÜFTEN. <br />Corona-Warn-APP nutzen. <br />Corona-Kontakttagebuch führen.</p>
                                <p className="mt-2">Alle informationen unter <br /><a href="https://www.infektionsschutz.de" target="_blank" rel="noopener noreferrer">www.infektionsschutz.de</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white py-6">
                        <div className="container mx-auto">
                            <div className="py-2 px-4">
                                <div className="font-semibold text-gray-400">Vergleich des Testergebnisses</div>
                                <div className="overflow-hidden break-words">{tid}</div>
                            </div>
                            <div className="py-4 px-4">
                                <div className="flex justify-center">
                                    <QRCode value={qr} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}