import * as React from 'react';

export default class Home extends React.Component<any, any> {
    constructor(props: React.ReactPropTypes) {
        super(props);
        this.state = {
            products: { data: [] },
        };
    }

    componentDidMount() {
        fetch('http://www.hillertech-qa.com/api/sales/items?$count=true&$filter=SalesActive+eq+true&$top=25')
            .then(res => {
                this.setState({ products: res });
            })
            .catch((e) => { console.log(e); });
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.products.data.map((x: any, i: number) =>
                            <li key={i}>
                                {i}
                            </li>
                        )}
                </ul>
            </div>
        );
    }
}
