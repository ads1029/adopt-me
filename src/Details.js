import React from "react";
import pet from "@frontendmasters/pet";

// **  hooks component of detail component:
// **  the new way of doing stateful component
// **  with useState, useEffect...

// const Details = props => {
//   return (
//     <pre>
//       <code>{JSON.stringify(props, null, 4)}</code>
//     </pre>
//   );
// };

// **  Class component of detail component:
// **  the old way of doing it without HOOKS
// **  now is replaced by HOOKS mostly

class Details extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    });
  }

  render() {
    return;
  }
}

export default Details;
