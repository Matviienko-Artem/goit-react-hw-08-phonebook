import axios from 'axios';
import * as actions from './contacts-action';

const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
    .catch(error => dispatch(actions.fetchContactError(error.message)));
};

const addNewContact = contact => dispatch => {
  const newContact = {
    name: contact.name,
    number: contact.number,
  };

  dispatch(actions.addNewContactRequest());

  axios
    .post('/contacts', newContact)
    .then(({ data }) => dispatch(actions.addNewContactSuccess(data)))
    .catch(error => dispatch(actions.addNewContactError(error.message)));
};

const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(error => dispatch(actions.deleteContactError(error.message)));
};

export default { fetchContacts, addNewContact, deleteContact };
