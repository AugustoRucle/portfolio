import React, { useEffect, useState } from 'react';

import Typewriter from '../Typewriter';
import { Progress } from 'antd';

import { isFunction } from '../../utils/ functions';

import './style.scoped.sass';

function Loading(props) {
    const {
        onFinish,
        duration,
    } = props;

    const durationInterval = Math.ceil(duration / 100);

    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const idInterval = setInterval(() => {
            setPercent((prevPercente) => {
                const newPercent = prevPercente + 1;

                if (newPercent >= 100) {
                    clearInterval(idInterval);
                    return 100;
                }

                return newPercent;
            });

        }, durationInterval);

        return () => clearInterval(idInterval)
    }, []);

    useEffect(() => {
        if (percent >= 100) {
            if (isFunction(onFinish)) {
                setTimeout(() => {
                    onFinish()
                }, 300);
            }
        }
    }, [percent]);

    return <div className="loading-page">
        <div>
            <div className="d-flex justify-content-center">
                <Typewriter>
                    <h1 className="loading-page__text">
                        Loading...
                    </h1>
                </Typewriter>
            </div>

            <div style={{ width: 500 }}>
                <Progress percent={percent} />
            </div>
        </div>
    </div>
}

export default Loading;