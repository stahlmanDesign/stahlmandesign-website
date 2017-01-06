import React from 'react'
import './ButtonWithStatus.css'

class ButtonWithStatus extends React.Component {

  render (){
    const {
      additionalClassName,
      additionalInlineStyles,
      status,
      buttonText,
      onHandleClick
    } = this.props;

    return(
      <button
        className={ 'btn btn-default ' + additionalClassName }
        style={ additionalInlineStyles }
        type='button'
        onClick={ onHandleClick }
      >
        { status === 'waiting'
          ? <i className="fa fa-spinner fa-pulse fa-1x fa-fw button-with-status-waiting"></i>
          : <span></span>
        }
        { status === 'error'
          ? <i className="fa fa-exclamation-circle fa-1x fa-fw button-with-status-error"></i>
          : <span></span>
        }
        { status === 'success'
          ? <i className="fa fa-check-circle fa-1x fa-fw button-with-status-success"></i>
          : <span></span>
        }
        { status === 'edit'
          ? <i className="fa fa-edit fa-1x fa-fw button-with-status-edit"></i>
          : <span></span>
        }
        { status === 'save'
          ? <i className="fa fa-save fa-1x fa-fw button-with-status-save"></i>
          : <span></span>
        }
        <span> { buttonText } </span>
      </button>
    )
  }
}

export default ButtonWithStatus
