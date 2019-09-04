import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'




class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    sortType: null,
    dropDownType: ""
  }

  fetchStocks = () => {
    return fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
  }

  componentDidMount() {
    this.fetchStocks()
    .then(stocks => this.setState({ stocks }))
  }

  buyStock = (stock) => {
    if (!this.state.portfolio.includes(stock)) {
      this.setState({portfolio: [...this.state.portfolio, stock]})
    }
  }

  sellStock = (s) => {
   this.setState({portfolio: this.state.portfolio.filter(stock => stock !== s)})
  }

  sortAndFilterStocks = () => {
    if (this.state.sortType === 'Alphabetically') {
      return this.state.stocks.sort((a, b) => (a.ticker).localeCompare(b.ticker))
    } else if (this.state.sortType === 'Price') {
      return this.state.stocks.sort((a, b) => a.price - b.price)
    } else if (this.state.dropDownType === 'Tech') {
      return this.state.stocks.filter(stock => stock.type === 'Tech')
    } else if (this.state.dropDownType === 'Finance') {
      return this.state.stocks.filter(stock => stock.type === 'Finance')
    } else if (this.state.dropDownType === 'Sportswear') {
      return this.state.stocks.filter(stock => stock.type === 'Sportswear')
    } else {
      return this.state.stocks
    }
  }

  handleSortChange = (event) => {
    this.setState({sortType: event.target.value})
  }

  handleDropdownChange = (event) => {
    this.setState({dropDownType: event.target.value})
  }

  handleClick = () => {
    this.setState({sortButtonChecked: !this.state.sortButtonChecked})
  }

  render() {
    return (
      <div>
        <SearchBar checked={this.state.sortType} handleSortChange={this.handleSortChange} handleDropdownChange={this.handleDropdownChange}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.sortAndFilterStocks()} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
