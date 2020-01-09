import {bindActionCreators} from "redux";
import * as authorActions from "../../redux/actions/authorActions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import React, {useEffect, useState} from "react"
import AuthorList from "./AuthorList";
import Spinner from "../common/spinner";

const AuthorsPage = ({actions, history, ...props}) => {
    const [authors, setAuthors] = useState(props.authors);

    useEffect(() => {
        if (props.authors.length === 0) {
            actions.loadAuthors().catch(error => {
                alert("Loading authors failed " + error);
            });
        } else {
            setAuthors(props.authors);
        }
    });

    const openAuthorPage = (event) => {
        event.preventDefault();
        history.push("/author");
    };

    return (
        <>
            <h2>Authors</h2>
            <button className="btn btn-primary" style={{marginBottom: 20}} onClick={openAuthorPage}>
                Add Author
            </button>
            {props.loading ? <Spinner/> : (
                <AuthorList authors={authors} onDeleteClick={actions.deleteAuthor}/>
            )}
        </>
    )
};

AuthorsPage.propTypes = {
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired
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