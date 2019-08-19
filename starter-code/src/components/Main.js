import React, { Component } from 'react';

class Main extends Component{   
    render() {
      return ( 
        <div className="todoListMain">
          <div className="row">
              <div className="col s12 m6">
                  <div className="card grey  lighten-5">
                      <div className="card-content dark-text">
                      <br/>
                      <br/>
                          <h1><p className="card-header" style={{background:'#F0F6F9', fontSize:'38px', paddingLeft:'250px', display:'0px'}}> <i class="fas fa-street-view fa-sm" ></i> Location is Everything</p> </h1>
                          <br/>
                          <p className="card" style={{paddingTop:'30px', paddingLeft:'20px', paddingRight:'20px', width:'910px', height:'150px'}}ALIGN='justify'>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur perspiciatis veniam sed exercitationem soluta inventore illo nam obcaecati voluptatibus quod fugiat cupiditate vitae facere quibusdam, voluptates at dolorem. Sint, optio?

                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis eius dolores error odit atque iure optio temporibus, saepe tempora, quod impedit eaque dolorem et magni dolorum, explicabo doloribus cumque est.</p> 
                          <br/>
                          <br/>
                          <span className="badge badge-pill badge-light text-muted ml-2"><small><strong>1er bloque</strong></small></span>
                      </div>
                      <br/>
                      <br/>
                      <div className="card-content dark-text">
                        <p className="card-header" style={{background:'#F0F6F9', fontSize:'28px', paddingLeft:'310px', textAlign: 'center'}}> <i class="fas fa-paragraph fa-xs"></i>Lorem ipsum dolor sit amet <br/>consectetur adipisicing</p>
                        <br/>
                        <p className="card" style={{paddingTop:'30px', paddingLeft:'20px', paddingRight:'20px', width:'930px', height:'120px'}}ALIGN='justify'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero rem, ipsa facere atque quas recusandae nemo omnis tenetur. Quo minima unde deleniti incidunt aut modi quisquam soluta, enim provident accusantium?</p> 
                        <hr style={{width: '400px',  color: 'black', marginLeft: '260px'}}/>
                        <span className="badge badge-pill badge-light text-muted ml-2"><small><strong>2do bloque</strong></small></span>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      )
  }
}


export default Main