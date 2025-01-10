
import React from 'react'
export default class Calcul extends React.Component{

        constructor (props){
            super(props)
            this.state={
                Ce:0,
                Tda:0,
                Dde:0,
                m:0
            }
            this.calcul=this.calcul.bind(this)
            this.handleChange=this.handleChange.bind(this)
        }
        handleChange(e){
            const {name,value}=e.target;
            console.log(name,value)
            this.setState({
                [name]:value
            })
        }
        calcul(e){
            e.preventDefault();
            this.setState(state=>({
                m:(state.Ce*(state.Tda/12))/Math.pow(1-(1+(state.Tda/12)),-state.Dde)
            }
            ))
        }
        render(){
            return (
                <>
                <label htmlFor="Ce">Capital emprunte:</label>
                <input type="number" name='Ce' value={this.state.Ce} onChange={this.handleChange}/>DH<br />
                <label htmlFor="Tda">Taux d'interet annuel:</label>
                <input type="number" name='Tda' value={this.state.Tda} onChange={this.handleChange}/>%<br />
                <label htmlFor="Dde">Duree de rembourssement:</label>
                <input type="number" name='Dde' value={this.state.Dde} onChange={this.handleChange}/>mois<br />
                <hr />
                <button onClick={this.calcul}>Calcul</button>
                <label htmlFor="Ce">La mensualite:</label>
                <input type="number" value={this.state.m} readOnly/>DH<br />
                </>
            )
        }

}