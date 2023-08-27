// import { useState, useEffect } from "react";
// import { nanoid } from "nanoid"
import ContactForm from "./ContactForm/ContactForm"
import Filter from "./Filter/Filter"
import ContactList from "./ContactList/ContactList"

const App = () => {

  // const [contacts, setContacts] = useState(getDataFromLocal())
  // const [filter, setFilter] = useState("")

  // useEffect(setDatatoLocal,[contacts]) 

  // function getDataFromLocal () {
  //   try {
  //     const contactsData = JSON.parse(localStorage.getItem('contacts'))
  //     console.log(contactsData);
  //     if (contactsData||[]) {return contactsData}
  //     //else {return [] }
  //   } catch (error) {
  //       console.log(error);
  //   }
  // }

  // function setDatatoLocal () {
  //      localStorage.setItem('contacts', JSON.stringify(contacts))
  //    }
 
  // const handleFormSubmit = (evt) => {
  //   evt.preventDefault()
  //   const name = evt.currentTarget.elements.name.value;
  //   const phone = evt.currentTarget.elements.number.value;
  //   if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()))
  //       return alert(`${name.toLowerCase()} is already in contacts`)
  //   setContacts([...contacts, ({ "id": nanoid(), "name": name, "number": phone })])
  //   setDatatoLocal();
  //   evt.currentTarget.reset()
  //   } 
  
  // const handleFilterChange = (evt) => {
  //   const name = evt.currentTarget.value.toLowerCase().trim();
  //   return setFilter(name)
  // }

  // const filterContacts = (filterValue) => {
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(filterValue))
  // }

  // const handleContactDelete = (id) => {
  //   return setContacts(contacts.filter(contact => contact.id !== id))
  // }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
        margin: '0',
        textAlign: 'left'  
      }}>
        <div>
         <h1>Phonebook</h1>
        {/* <ContactForm submit={handleFormSubmit} /> */}
        <ContactForm/>
         <h2>Contacts</h2>
        {/* <Filter change={handleFilterChange } /> */}
        <Filter  />
         {/* <ContactList
            contacts={filterContacts(filter)}
            handleDelete={handleContactDelete}
         /> */}
          <ContactList/>
        </div>
    </div>
  )
  }

export default App