import React from "react";
import AuthorForm from "./AuthorForm";
import {connect} from "react-redux";
import {PropTypes} from "prop-types"
import {newAuthor} from "../../../tools/mockData";

const ManageAuthorPage = ({author}) => {
    return <AuthorForm author={author}/>
    // return <AuthorForm author={} onSave={} onChange={}/>
};

function mapStateToProps() {
    return {
        author: newAuthor
    }
}

function mapDispatchToProps() {

}

ManageAuthorPage.propTypes = {
    author: PropTypes.object.required
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);