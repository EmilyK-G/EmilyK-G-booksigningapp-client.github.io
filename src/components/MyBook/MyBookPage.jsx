import React from 'react';
import './MyBookPage.css';
export class MyBookPage extends React.PureComponent {
    render() {
      return ( <div className='myBook_page px-2 py-4'>
          {this.props.myBookPage.map((mes)=>{
          return <figure key={mes._id} className="text-end">
                    <blockquote className="blockquote">
                        <p className='prevMsg_text mt-3 text-end'>{mes.message}</p>
                    </blockquote>
                    <figcaption className="blockquote-footer text-end">
                        <cite title="Sent date">{mes.sender_signature}</cite>
                    </figcaption>
                </figure>
        } )}
      </div>
      );
    }
  }
export default MyBookPage
