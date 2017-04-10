import React, {Component} from 'react';

class ListRow extends Component {
  render() {
    return (
      <tr>
      <th scope="row">{this.props.number}</th>
      <td>{this.props.list.name}</td>
      <td>{this.props.list.score}</td>

    </tr>
    )
  }
}
export default ListRow;
