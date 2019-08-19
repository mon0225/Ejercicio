import React, { Component } from 'react';


class Restaurant extends Component{
      render() {
        return ( 
            <div className="card grey lighten-5" style={{width: 480}}>
            <br/>
            <div className="card-body" style={{background:'#F0F6F9', width:'450px', marginLeft:'2px'}}>
                <h5 className="card-title" ALIGN='center'><strong>Lorem ipsum dolor</strong></h5>
            </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item"><h4 style={{fontSize:'15px', marginTop:'-10px'}}><i class="fas fa-asterisk fas-xs mt-4"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4></li>
                <li className="list-group-item"><h3 style={{fontSize:'15px',marginTop:'-10px'}}><i class="fas fa-asterisk fas-xs mt-4"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3></li>
                <li className="list-group-item"><h3 style={{fontSize:'15px',marginTop:'-10px'}}><i class="fas fa-asterisk fas-xs mt-4"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3></li>
                </ul>
                <br/>
            <div className="card ml-4" style={{width: 400}}>
                <h6 className="card-title ml-2 mr-12 mt-12" ALIGN='center' style={{paddingTop:'30px'}}><strong><img src='/trabajo8.png' alt='contacto' width='26px' /> Contact Us</strong></h6>
                <br/>
                <form className="ml-4 mr-4">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1"><i class="fas fa-user"></i> Name</label>
                        <input type="email"  id="exampleFormControlInput1" placeholder="name"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1"><i class="fas fa-envelope"></i> Email</label>
                        <input type="email"  id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1"><i class="fas fa-comment"></i> Text</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group" ALIGN='center'>
                        <button className="btn waves-effect waves-light" type="submit" name="action" style={{background:'#3E99C6', fontSize:'13px'}}>Enviar</button>
                    </div>
                </form>
            </div>
            <br/>
          </div>
        )
    }
}


export default Restaurant