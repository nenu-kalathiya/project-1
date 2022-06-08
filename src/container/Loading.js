import React from 'react';

function Loading(Component) {
    return function loader({ isLoading, data }) {
        if (isLoading) {
            return (
                <div class="loadder">
                    <div class="line line-1"></div>
                    <div class="line line-2"></div>
                    <div class="line line-3"></div>
                    <div class="line line-4"></div>
                    <div class="line line-5"></div>
                    <div class="line line-6"></div>
                    <div class="line line-7"></div>
                    <div class="line line-8"></div>
                </div>
        // </div >
            )
        } else {
            return (
                <Component data={data} />
            )
        }
    }
}

export default Loading;