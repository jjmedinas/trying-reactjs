import React from 'react';
import Contact from './Contact';

class ContactsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }


    updateSearch(event){
        this.setState({search: event.target.value});
    }

    render() {

        let filteredContacts = this.props.contacts.filter(
            (contact) => {
                // console.log("search state " + this.state.search)
                // console.log("contact name " + contact.name)
                // console.log("Result " + contact.name.indexOf(this.state.search))

                return contact.name.indexOf(this.state.search) !== -1;
            }
        );
        return (
            <div>
                <input type="text"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}/>
                <ul>
                    {filteredContacts.map((contact) => {
                        return <Contact contact={contact}
                            key={contact.id} />
                    })}
                </ul>
            </div>
        )
    }
}

export default ContactsList