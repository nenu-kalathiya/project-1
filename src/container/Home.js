import React from 'react';

function Home({ data }) {
    return (
        data.map((d, i) => {

            return (
                <div key={i}>
                    <h3>{d.id}</h3>
                    <h3>{d.name}</h3>
                </div>
            )
        })
    );
}

export default Home;