import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import { removeContact } from "redux/contactSlice";
import { getFilter } from "redux/selectors";
import css from "../ContactList/ContactList.module.css"
// import PropTypes from "prop-types";

const ContactList = () => {

    const dispatch = useDispatch();

    const contacts = useSelector(getContacts);
    const filterValue = useSelector(getFilter);
    
    const filteredContacts = () => {
       // if (contacts.lenght === 0) return null
        return contacts.filter(contact => contact.name.toLowerCase().includes(filterValue))
    }

    const handleContactDelete = (id) => {
        console.log(id);
        dispatch(removeContact(id))
    // return setContacts(contacts.filter(contact => contact.id !== id))
    }

    return (
        <ul className={css.contactList}>
            {filteredContacts().map(({ id, name, phone }) =>
            <li key={id} className={css.contactListItem}>
                {name}: {phone}
                    <button className={css.contactListButton} type="button" onClick={() => { handleContactDelete(id) }}>Delete</button>
            </li>)}
            
        </ul>
    )
}

export default ContactList

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.exact({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//     })),
//     handleDelete: PropTypes.func.isRequired,
// }