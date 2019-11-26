import React, { Component } from 'react';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import { fetchPage1} from '../../action/Page1';
import favSvg from '../../assets/fav.svg';

class ListPost extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    
  }



  editFavouriteList=(e,key)=>{
    
    var id=key;

    fetch('http://localhost:3001/posts/'+id, {
    method: 'PATCH',
    body: JSON.stringify({
      isFavourite: true
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
      
    



  }

  favouriteListRender=()=>{
    console.log("hisafbhsf")
   
    this.setState({
      showComponent:true
    })

  }
  componentDidMount(){
     this.props.fetchPage1();
  }
  render() {
    var list = this.props.posts.page1.map((item,key)=>{
      return (
        <tr key={key}>
            <td> {item.userId} </td>
            <td> {item.id} </td>
            <td> {item.title} </td>
            <td> {item.body} </td>
            <td>
              <button onClick={(e)=>this.editFavouriteList(e,item.id)} className="btn btn-outline-primary"><img src={favSvg} /></button>
            </td>
        </tr>
      )
    })
    return (
      <div className="col-md-12 col-lg-12">
          <div className="card mb-4">
              <div className="card-block">
                  <Link to={`/isFavourite=true`}><button className="btn btn-outline-primary">Favourite Posts</button></Link>
                  <div className="table-responsive">
                      <table className="table table-striped">
                          <thead>
                              <tr style={{textAlign:'center'}}>
                                  <th>User Id</th>
                                  <th>Id</th>
                                  <th>Title</th>
                                  <th>Body</th>
                                  <th>Favourite</th>
                              </tr>
                          </thead>
                          <tbody>
                            {list}
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    posts: state.page1
  }),{
    fetchPage1,
  }
)(ListPost)
