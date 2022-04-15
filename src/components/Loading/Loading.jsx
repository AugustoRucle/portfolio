import React, { useEffect, useState } from 'react';

import RandomLetters from '../RandomLetters';
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
        if (isCompletedLoading()) {
            if (isFunction(onFinish)) {
                setTimeout(() => {
                    onFinish()
                }, 300);
            }
        }
    }, [percent]);

    /**
     * Check if loading have been complete
     * 
     * @return {bool}
     */
    const isCompletedLoading = () => {
        return percent >= 100;
    }

    return <div className="loading-page">
        <div>
            <div className="d-flex justify-content-center">
                <div className="loading-page__text">
                    <RandomLetters
                        durationAnimation={100}
                        durationByLetter={200}
                        amountRandomLetter={50}
                        color={isCompletedLoading() ? 'success-2' : 'white'}
                        text="Cargando..."
                    />
                </div>
            </div>

            <div className="loading-page__progress">
                <Progress percent={percent} />
            </div>
        </div>
    </div>
}

export default Loading;