import React from 'react';
import { Box } from '@material-ui/core';
import TabButtons from './TabButtons';
import TabContent from './TabContent';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tabIndex: '' };
    this.newIndex = this.newIndex.bind(this);
  }

  newIndex(e, index) {
    e.preventDefault()
    this.setState({ tabIndex: index });
  }

  render() {
    return (
      <Box>

        <TabButtons
          buttons={this.props.tabs}
          newIndex={this.newIndex}
          tabIndex={this.state.tabIndex}
        />
        <TabContent
          content={this.props.tabs}
          tabIndex={this.state.tabIndex}
        />
      </Box>
    )
  }
}