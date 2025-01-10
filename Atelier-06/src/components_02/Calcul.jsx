
import React from 'react'
export default class Calcul extends React.Component{

        constructor (props){
            super(props);
            this.state={
                distance:0,
                poids:0,
                Mode:'Normal',
                Cout_total:0,
            }
            this.calcul=this.calcul.bind(this)
            this.handleChange=this.handleChange.bind(this)
        }
        handleChange(e){
            const {name,value}=e.target;
            this.setState({
                [name]:value
            })
        }
        calcul(e){
            e.preventDefault();
            let res=0;
            if(this.state.poids<10){
                res=this.state.distance * 0.5
            }else{
                res = this.state.distance * (this.state.poids/10) * 0.3
            }

            if(this.state.Mode=='Express'){
                res+=res*0.2
            }
            this.setState({
                Cout_total:res
            }
            )
        }
        render(){
            return (
                <>
                <label htmlFor="distance">Distance:</label>
                <input type="number" name='distance' value={this.state.distance} onChange={this.handleChange}/>DH<br />
                <label htmlFor="poids">Poids:</label>
                <input type="number" name='poids' value={this.state.poids} onChange={this.handleChange}/>%<br />
                <label htmlFor="Mode">Mode de transport:</label>
                <input type="radio" name='Mode' value='Express' checked={this.state.Mode==='Express'} onChange={this.handleChange}/>Express
                <input type="radio" name='Mode' value='Normal' checked={this.state.Mode==='Normal'} onChange={this.handleChange}/>Normal
                <br />
                <hr />
                <button onClick={this.calcul}>Calcul</button>
                <label htmlFor="Cout_total">Cout Total:</label>
                <input type="number" value={this.state.Cout_total} readOnly/>DH<br />
                </>
            )
        }

}