import React from 'react';

export default function NeighbourhoodProperties() {
    return (
        <section className="luxurylistings my-12 w-full overflow-hidden">
            <div className="listings-heading my-5 w-1/2 mx-auto">
                <h2 className="text-5xl">Find Properties by Neighbourhood</h2>
                <h4>Choose where you live, find your place there</h4>
            </div>
            <section className="listings relative">
                <ul ref={scrollRef} className="flex overflow-hidden gap-6">
                    {listings}
                    {listings}
                </ul>
            </section>
        </section>

    )
}