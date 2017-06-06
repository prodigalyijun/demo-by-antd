import React from 'react';
import checkLog from '../utils/checkLog';

class HomeLayout extends React.Component {
    componentWillMount() {
        checkLog();
    }
    render() {
        const { title, children } = this.props;
        return (
            <div>
                <header>
                    <h1>{title}</h1>
                </header>

                <main>
                    {children}
                </main>
            </div>
        );
    }
}

export default HomeLayout;