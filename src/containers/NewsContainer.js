import React from 'react'
import News from '../components/News'
import { connect } from 'react-redux';
import { fetchNews } from '../actions/fetchNews';

class NewsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchNews() 
    }

    render() {

        return(
                <News news={this.props.news}/>
        )
    }
}

const mapStateToProps = state  => {
    return {
        news: state.news
    }
}

export default connect(mapStateToProps, {fetchNews})(NewsContainer); 