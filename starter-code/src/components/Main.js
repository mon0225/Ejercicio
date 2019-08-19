import React, { Component } from 'react';
import { items } from './items.json'

class Main extends Component{
  constructor(props) {
      super(props);
      this.state = {
          items : items,
          value: 0
      };
      this.handleClick = this.handleClick.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.addItem = this.addItem.bind(this);
      this.increment = this.increment.bind(this);
    }
    handleClick(e){
        let newItem = [];
        for( var i = 0; i < this.state.items.length; i++)
        newItem.push(items[i])
        this.setState({
            items: newItem,
        })
        console.log(this.state)
        }
        handleSubmit(e){
        e.preventDefault();
        this.state.onAdd(this.state);
        }
        increment(event) {
        this.setState({
            value: this.state.value + 1
        });
    };
    addRow(){
      this.setState({items: this.state.items + 1});
      var listItem = {id: this.state.item, product:{name:"", precio: "0"}};
      var allItem = this.state.items.concat([listItem]);
      this.setState({lists: allItem});
    }
  /*addItems(item){
        this.setState({items:this.state.items.concat(item)})
          console.log(this.state.items) // this is working
        }*/
    addItem(){
      this.setState({items: this.state.items + 1});
      let newItems = this.state.items.slice();
      var allItem = this.state.items.concat([newItems]);
      this.setState({
        items: allItem
      })
      console.log(this.state.items)
    }
    removeItem(index){
      this.setState({
        items: this.state.items.filter((e, i)=>{
          return i !== index
        })
      })
    }
    render() {
      const items = this.state.items.map((item, i)=>{
          return (
              <div className="card-body">   
                  <table className="table responsive-table centered table-hover">
                      <thead>
                          <tr>
                              <th scope="col"> </th>
                              <th scope="col">SOPA</th>
                              <th scope="col">CARNE</th>
                              <th scope="col">POSTRE</th>
                              <th scope="col"><i className="material-icons small">local_atm</i></th>
                              <th scope="col">AGREGAR</th>
                              <th scope="col">CANTIDAD</th>
                              <th scope="col">QUITAR</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <th scope="row"><i class="material-icons">restaurant</i></th>
                              <td>{item.soup}</td>
                              <td>{item.meat}</td>
                              <td>{item.dessert}</td>
                              <td>{item.price}</td>
                              <td><button onClick={this.addItem} className="btn-floating btn-small waves-effect waves-light red lighten-2 text-center" type="submit"> <i class="material-icons">add</i> </button></td>
                              <td><button onClick={() => { this.increment(); }} className="btn btn-small waves-effect waves-light indigo lighten-2 text-center" >{this.state.value}</button></td>
                              <td><button onClick={this.removeItem.bind(this,i)} className="btn-floating btn-small waves-effect waves-light blue lighten-2 text-center" type="submit"> <i class="material-icons">delete</i> </button></td>           
                          </tr>
                      </tbody>
                  </table>
                  
              <div>
          </div>
      </div>
      )
  })
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