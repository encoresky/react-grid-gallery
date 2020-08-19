import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FaThumbsUp } from 'react-icons/fa';

class CheckButton extends Component {
    constructor (props) {
        super(props);

        this.state = {
            hover: this.props.hover
        };

        this.fill = this.fill.bind(this);
        this.visibility = this.visibility.bind(this);
    }

    fill () {
        if (this.props.isSelected)
            return this.props.selectedColor;
        else if (this.state.hover)
            return this.props.hoverColor;
        return this.props.color;
    }

    visibility () {
        if (this.props.isSelected ||
            (this.props.isSelectable && this.props.parentHover))
            return 'visible';
        return 'visible';
    }

    render () {
        let circleStyle = {
            display: this.props.isSelected ? "block" : "none"
        };

        return (
                <div
            title="Select"
            style={{
                visibility: this.visibility(),
                background: 'none',
                float: 'left',
                width: '36px',
                height: '36px',
                border: 'none',
                padding: '6px',
                cursor: 'pointer',
                pointerEvents: 'visible'
            }}
            onClick={this.props.onClick ?
                     (e) => this.props.onClick(this.props.index, e) : null
            }
            onMouseOver={(e) => this.setState({hover: true})}
            onMouseOut={(e) => this.setState({hover: false})}>
                <FaThumbsUp color={this.props.isSelected ? "#01999b" : "#fff"} />
                </div>
        )
    }
}

CheckButton.propTypes = {index: PropTypes.number,
                         color: PropTypes.string,
                         isSelectable: PropTypes.bool,
                         isSelected: PropTypes.bool,
                         selectedColor: PropTypes.string,
                         parentHover: PropTypes.bool,
                         hover: PropTypes.bool,
                         hoverColor: PropTypes.string,
                         onClick: PropTypes.func};

CheckButton.defaultProps = {isSelectable: true,
                            isSelected: false,
                            parentHover: false,
                            hover: false};

module.exports = CheckButton;
