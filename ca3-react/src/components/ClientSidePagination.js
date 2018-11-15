import React, { Component } from 'react';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
const URL = "https://anderskruse.dk/ca3/api/info/sw/87"


const columns = [{
    dataField: 'name',
    text: 'Name',
    sort: true
}, {
    dataField: 'height',
    text: 'Height',
    filter: textFilter()
},{
    dataField: 'birth_year',
    text: 'Birth year',
    filter: textFilter()
},{
    dataField: 'gender',
    text: 'Gender',
    sort: true
}];


class App extends Component {
    state = { names: [], msg: "" }



    async componentDidMount() {
        console.time("fetching");
        this.setState({ msg: "Loading..." });
        const names = await fetch(URL).then(res => res.json());
        console.timeEnd("fetching");
        console.time("rendering");
        this.setState({ names, msg: "" });
    }
    componentDidUpdate() {
        console.timeEnd("rendering");
    }
    render() {
        return (
            <div>
                <h2>AppClientPagination</h2>
                <BootstrapTable
                    striped
                    hover
                    bootstrap4
                    keyField='name'
                    data={this.state.names}
                    columns={columns}
                    filter={filterFactory()}
                    pagination={paginationFactory()}
                />

            </div>
        );
    }

}

export default App;
