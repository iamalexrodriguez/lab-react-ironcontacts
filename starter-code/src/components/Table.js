import React, {Component} from 'react'
import contacts from '../contacts.json'
import { Button } from 'antd';
import { Table as tabla} from 'antd';

class Table extends Component{

    state={
      artistas:[]
    }
    
    drawArtist=(elem, index)=>{
            return  <tr key={index}>
                <td>
                    <img src={elem.pictureUrl} alt="foto" height="100px"/>
                </td>
                <td>
                    <p>{elem.name}</p>
                </td>
                <td>
                    <p>{elem.popularity}</p>
                </td>
                <td>
                    <Button type="danger" onClick={()=>{
                        console.log(index)
                        let {artistas} = this.state
                        artistas.splice(index, 1)
                        this.setState({artistas})
                    }}>Delete</Button>



                </td>



            </tr> 
    }


    removeElem =(index)=>{
        console.log(index)

    }


    addRandom =()=> {
        let randomNumber = Math.floor((Math.random()*194)+5)
        let {artistas} = this.state 
        artistas.push( contacts[randomNumber])
        this.setState({artistas})
    }



    sortName =()=>{
        let {artistas} = this.state
        artistas.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          }); 

        this.setState({artistas})
    }

    sortPop =()=>{
        let {artistas} = this.state
        artistas.sort(function (a, b) {
            if (a.popularity > b.popularity) {
              return -1;
            }
            if (a.popularity < b.popularity) {
              return 1;
            }
            return 0;
          }); 

        this.setState({artistas})
    }


    

    componentDidMount(){
        this.setState({ artistas:contacts.filter((elem, index)=> index < 5 )})
        // console.log(contacts)
        console.log(this.state.artistas)
    }
    render(){
        
        const columns = [
            {  
                title: "Picture",
                dataIndex: "pictureURL"
             },{
                 title:"Name",
                 dataIndex: "name"
             },{
                 title:"Popularity",
                 dataIndex: "popularity"
             },{
                 title:"Action",
                 dataIndex: "action"
             }]

        const data = this.state.artistas.map(this.drawArtist)

        return(
            <div>
                <div>
                    <Button type="primary" ghost onClick={this.addRandom}>Add random contact</Button>
                    <Button type="primary" ghost onClick={this.sortName}>Sort by name</Button>
                    <Button type="primary" ghost onClick={this.sortPop}>Sort by popularity</Button>
                </div>

                {/* <tabla columns={columns} dataSource={data}>



                </tabla> */}


                <table>
                   <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.state.artistas.map(this.drawArtist)}
                    </tbody>
                </table>

            </div>
        )
    }

}




export default Table