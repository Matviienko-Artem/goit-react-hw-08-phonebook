import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import operations from '../redux/contacts/contacts-operations';
import selectors from '../redux/contacts/contacts-selectors';
import style from '../components/ContactForm/ContactForm.module.css';

class ContactsViews extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className={style.container}>
        <h1>Phonebook</h1>

        <ContactForm />

        <h2>Contacts</h2>

        <Filter />
        {this.props.isLoadingContacts && <h2>Загружаем список контактов...</h2>}
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: selectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsViews);
