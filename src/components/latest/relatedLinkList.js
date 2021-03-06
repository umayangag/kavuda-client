import React, {Component} from "react";
import Grid from "@material-ui/core/Grid/Grid";
import RelatedLinkItem from "./relatedLinkItem";
import Typography from "@material-ui/core/Typography/Typography";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core";
import Styles from "../../styles/styles";

class RelatedLinkList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.setState({open: !this.state.open});
  }

  render() {
    const {classes, links} = this.props;

    let viewSet = links.slice(0, 5);
    let hiddenSet = links.slice(5);

    return (
      <Grid container width={1} spacing={2}>
        {Array.isArray(viewSet) ?
          viewSet.map((title) => (
            <RelatedLinkItem key={title}
                             imageUrl="" title={title}/>
          ))
          :
          <Typography component="p">
            No Results Found
          </Typography>
        }
        {!this.state.open && hiddenSet.length > 0 ?
          <Grid item>
            <Tooltip title={hiddenSet.length +" more"} aria-label="add">
              <Link className={classes.link} to="#">
                <Avatar alt="view more" src="plus.jpg" onClick={this.handleClick}/>
              </Link>
            </Tooltip>
          </Grid>
          : null
        }

        {Array.isArray(hiddenSet) && this.state.open ?
          hiddenSet.map((title) => (
            <RelatedLinkItem key={title}
                             imageUrl="" title={title}/>
          ))
          : null
        }
      </Grid>
    )
  }
}

export default withStyles(Styles)(RelatedLinkList);
