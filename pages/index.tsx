import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { MainLayout } from '../components';

const Home: NextPage = () => {
    return (
        <Provider store={store}>
            <MainLayout>
                <div className="w-full h-full">test</div>
                <div className="bg-red-900">
                    <div className="p-5 text-center font-bold">
                        Welcome to Next.js!
                    </div>
                </div>
            </MainLayout>
        </Provider>
    );
};

export default Home;
