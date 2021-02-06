import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
   
    let responseHTML = '';

    this.props.menu.forEach( (item) => {
      //This wraps the item in the list
      responseHTML += '<li>' + item + '<li>' ;
    });
    //this wraps the response
    responseHTML = '<ul>' + responseHTML + '</ul>' ;
    return responseHTML;
  }
}

export default Sidebar;
