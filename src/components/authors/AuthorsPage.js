import {bindActionCreators} from "redux";
import * as authorActions from "../../redux/actions/authorActions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import React, {useEffect, useState} from "react"
import AuthorList from "./AuthorList";
import Spinner from "../common/spinner";

const AuthorsPage = (props) => {
    const [authors, setAuthors] = useState(props.authors);

    useEffect(() => {
        if (props.authors.length === 0) {
            props.actions.loadAuthors().catch(error => {
                alert("Loading authors failed " + error);
            });
        } else {
            setAuthors(props.authors);
        }
    });

    return (
        <>
            <h2>Authors</h2>
            {props.loading ? <Spinner/> : (
                <AuthorList authors={authors} onDeleteClick={props.actions.deleteAuthor}/>
            )}
        </>
    )
};

AuthorsPage.propTypes = {
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        authors: state.authors,
        loading: state.apiCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
            deleteAuthor: bindActionCreators(authorActions.deleteAuthor, dispatch)
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);