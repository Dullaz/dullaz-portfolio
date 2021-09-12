import { Container } from '@components/ui'
import React from 'react'
import contacts from '@config/contacts.json'

function Contacts() {
  return (
    <Container id="contacts">
      <div className="text-right">
        <h2>Contacts</h2>
        <ul className="mt-4">
          <li>{contacts.address}</li>
          <li>
            <a className="underline" href={`tel:${contacts.phoneNumber}`}>
              {contacts.phoneNumber}
            </a>
          </li>
          <li>
            <a className="underline" href={`mailto:${contacts.email}`}>
              {contacts.email}
            </a>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Contacts
