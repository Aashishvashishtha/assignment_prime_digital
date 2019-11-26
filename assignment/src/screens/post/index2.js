import React, { Component } from 'react';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import { fetchFavListData} from '../../action/Page1';
import favSvg from '../../assets/fav.svg';

class FavListPost extends Component {


  editFavouriteList=(e,key)=>{
    
    var id=key;
    fetch('http://localhost:3001/posts/'+id, {
    method: 'PATCH',
    body: JSON.stringify({
      isFavourite: false
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

  this.props.fetchFavListData();
      
    



  }

  componentDidMount(){
    this.props.fetchFavListData();
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
              <button  style={{
    backgroundColor: item.isFavourite === "true" ? "#7376df": "#fff",
  }} onClick={(e)=>this.editFavouriteList(e,item.id)} className="btn btn-outline-primary2"><img src={favSvg} /></button>
            </td>
        </tr>
      )
    })
    return (
      <div className="col-md-12 col-lg-12">
          <div className="card mb-4">
              <div className="card-block">
                  <Link to={`/posts`}><button className="btn btn-outline-primary">Posts</button></Link>
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
    fetchFavListData
  }
)(FavListPost)
