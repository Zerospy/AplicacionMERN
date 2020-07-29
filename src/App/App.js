import React, { Component } from 'react';

class App extends Component {

        constructor(){
                super();
                 this.state = {
                    producto: '',
                    description: '' ,
                    _id: '',
                    tasks:[]
                            
                 };
                    this.handleChange = this.handleChange.bind(this);
                    this.addTask = this.addTask.bind(this);
        }

        addTask(e) {           
            if(this.state._id){
                            fetch(`/api/tasks/${this.state._id}`,{
                            method: 'PUT',
                            body: JSON.stringify(this.state),
                            headers: { 
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            }
                            })
                            .then(res => res.json())
                            .then(data =>{ console.log(data); 
                            M.toast({html:'Actualizado correctamente'});
                            this.setState({ producto: '', description:'', _id:0});
                            this.fetchTasks();
                            });
                        }else{
                    fetch('/api/tasks', {
                        method: 'POST', 
                        body: JSON.stringify(this.state),
                        headers: { 
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'}
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data),
                        M.toast({html: 'Task Saved'});
                        this.setState({producto: '',
                                         description: ''});
                                         this.fetchTasks(); // Esta tarea actualizara la tabla de datos al ingresar un nuevo elemento
                                    })
                    .catch(err => console.error(err)); 
                    e.preventDefault();
                                }
                 }
                    deleteTask(id){
                        if(confirm('¿Estas seguro que desear borrar este elemento?')){
                        console.log('deleting', id)
                        fetch(`/api/tasks/${id}`, {
                            method: 'DELETE',
                            headers: {
                                'Accept': 'application/json',
                                'Content': 'application/json'
                            }
                        })
                        .then(res => res.json())
                        .then(data => { console.log(data),
                            this.fetchTasks()
                                })      
                             }                   
                           }        
                    editTask(id){                                               //Lo que hace este editar es pasar los parametros
                                                                                // del objeto seleccionado a nuestro state
                        fetch(`/api/tasks/${id}`)                               // almacenando la id y cambiando 
                        .then(res => res.json())
                        .then(data => { console.log(data),
                            this.setState({
                                producto: data.producto,
                                description: data.description,
                                _id: data._id
                              }),
                              this.fetchTasks() })                    
                          }                
                    
                 componentDidMount(){
                     this.fetchTasks();
                }
       
        fetchTasks(){

                fetch('/api/tasks')
                    .then(res => res.json())
                    .then(data => { this.setState({tasks: data});
                         console.log(this.state.tasks) 
                        });    }
            handleChange(e){
                    const { name, value} = e.target;
                    this.setState({
                          [name] : value

                    });
            }
          
    render(){

        return(
                    <div>
                        <nav className="light-blue darken-4"> 
                        <div className="container">
                            <a className="band-logo" href="/">Administrador de negocios Online</a>
                        </div>
                        </nav>

                                <div className="container">
                                        <div className="row"> 
                                                <div className="col s5">
                                                    <div className="card">
                                                        <div className="card-content">
                                                            <form onSubmit={this.addTask}>
                                                                <div className="row">   
                                                                    <div className="input-field col s12">
                                                                        <input name="producto" onChange={this.handleChange} type="text" placeholder="Nombre Producto" value={this.state.producto}/>
                                                                    </div>
                                                                   
                                                                </div>   
                                                                <div className="row">   
                                                                    <div className="input-field col s12">
                                                                        <textarea name="description" onChange={this.handleChange} type="text" className="materialize-textarea" placeholder="Descripcion" 
                                                                        value={this.state.description}
                                                                        ></textarea>
                                                                    </div>
                                                                
                                                                </div>   
                                                                <button type="submit" className="btn btn-light darken-4"> Send </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col s7">

                                                    <table>  
                                                        <thead>  
                                                               <tr>
                                                                   <th>Nombre Producto</th>
                                                                   <th>Descripcion</th>
                                                                   <th>Editar</th>
                                                                   <th>Borrar</th>

                                                             </tr>
                                                        </thead>
                                                        <tbody> 
                                                            { 
                                                            this.state.tasks.map(task => {
                                                                return ( 
                                                                    <tr key={task._id}> 
                                                                        <td> {task.producto}</td>
                                                                        <td> {task.description}</td>
                                                                        <td>      
                                                                                  <button className="btn light-blue darken-4" onClick={() => this.editTask(task._id) }><i className="material-icons">edit</i> </button>  
                                                                                    
                                                                         </td>
                                                                         <td> <button className="btn light-blue darken-4" style={{margin: '4px'}} onClick={ ()=> this.deleteTask(task._id) }><i className="material-icons">delete</i></button> </td>
                                                                  
                                                                    </tr>
                                                                )
                                                            })
                                                            }
                                                        </tbody>
                                                        </table>
                                                                                                        </div>
                                        </div>

                                </div>

                    </div>
        )
    }
}
export default App;