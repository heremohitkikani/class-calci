
import React from 'react';
class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            sign: "",
            temp: "",
            fval: ""
        };
        

    }
    getdata = (a) => {
        this.setState({
         temp:this.state.temp+a
        })
        // console.log(this.temp);
     }
     clr = () => {
        this.setState({
            temp:this.state.temp.substring(0, this.state.temp.length - 1)
        })
     }

     equal = () => {
        let tem=0;
 
         if (this.state.sign == '+') {
            this.setState({
                temp:String(parseInt(this.state.fval) + parseInt(this.state.temp))
            })
         }
         if (this.state.sign == '-') {
            this.setState({
                temp:String(parseInt(this.state.fval) - parseInt(this.state.temp))
            })
         }
         if (this.state.sign == '*') {
            this.setState({
                temp:String(parseInt(this.state.fval) * parseInt(this.state.temp))
            })
         }
         if (this.state.sign == '/') {
             
             if(this.state.temp==0){
                this.setState({
                    temp:'can not divide by 0..'
                })
             }
             else{
                this.setState({
                    temp:String(parseInt(this.state.fval) / parseInt(this.state.temp))
                })
             }
         }
         if (this.state.sign == "%") {
            this.setState({
                temp:String(parseInt(this.state.fval) % parseInt(this.state.temp))
            })
         }
     }

     eqa = (s) => {
        this.setState({
            sign:s,
            fval:this.state.temp,
            temp:''
        })
        console.log(s);
        console.log(this.state.sign+'7777777777777777');
    }
    clear = () => {
        this.setState({
           temp:''
        })
        
    }
    render() {
        return (
            <>

                <div style={{ border: ' 4px black solid', width: ' 280px' }} className="div">
                    <form name="form1">
                        {/* <table class="screen"> */}

                        <input type="text" value={this.state.temp} name="main" className="main" placeholder="CALCULATION"></input>

                        {/* </table> */}

                        <table class="border">

                            <tr>
                                <td><input type="button" name="" class="clr" value="CLR" style={{ padding: " 10px 0px 10px 1px" }} onClick={this.clr} ></input></td>
                                <td><input type="button" name="" value="%" style={{ padding: " 10px 20px " }} onClick={() => this.eqa('%')}></input></td>
                                <td><input type="button" class="clear" name="" value="C" style={{ padding: " 10px 20px" }} onClick={this.clear}></input></td>
                                <td><input type="button" name="" value="/" style={{ padding: " 10px 20px" }} onClick={() => this.eqa('/')} ></input></td>

                            </tr>

                            <tr>
                                <td><input type="button" name="" value="7" style={{ padding: " 10px 20px" }} onClick={()=>this.getdata(7)}></input></td>
                                {/* <td><input type="button" name="" value="7" style={{ padding: " 10px 20px" }} onClick={(e) => {settemp(temp + e.target.value) }}></input></td> */}
                                <td><input type="button" name="" value="8" style={{ padding: " 10px 20px" }} onClick={() => this.getdata(8)}></input></td>
                                <td><input type="button" name="" value="9" style={{ padding: " 10px 20px" }} onClick={() => this.getdata(9)}></input></td>
                                <td><input type="button" name="" value="*" style={{ padding: " 10px 20px" }} onClick={() => this.eqa('*')}></input></td>
                            </tr>


                            

                            <tr>
                                <td><input type="button" name="" value="4" style={{ padding: " 10px 20px" }} onClick={() => this.getdata(4)}></input></td>
                                <td><input type="button" name="" value="5" style={{ padding: " 10px 20px" }} onClick={() => this.getdata(5)}></input></td>
                                <td><input type="button" name="" value="6" style={{ padding: " 10px 20px" }} onClick={() => this.getdata(6)}></input></td>
                                <td><input type="button" name="" value="-" style={{ padding: " 10px 20px" }} onClick={() =>this.eqa("-")}></input></td>
                            </tr>

                            <tr>
                                <td><input type="button" name="" value="1" style={{ padding: "10px 20px" }} onClick={() => this.getdata(1)} ></input></td>
                                <td><input type="button" name="" value="2" style={{ padding: "10px 20px" }} onClick={() => this.getdata(2)} ></input></td>
                                <td><input type="button" name="" value="3" style={{ padding: "10px 20px" }} onClick={() => this.getdata(3)} ></input></td>
                                <td rowSpan={2}><input class="plus" type="button" name="" value="+" style={{ padding: " 10px 20px" }} onClick={() => {this.eqa("+") }} ></input></td>
                            </tr>

                            <tr>
                                <td><input type="button" name="" value="0" style={{ padding: " 10px 20px" }} onClick={() => this.getdata(0)} ></input></td>
                                <td><input type="button" name="" value="." style={{ padding: " 10px 20px" }} onClick={() => this.getdata('.')} ></input></td>
                                <td><input type="button" name="" value="=" style={{ padding: " 10px 20px" }} onClick={() =>this.equal()} ></input></td>


                            </tr>
                        </table>
                    </form>
                </div>
            </>
        )
    }
}
export default Home;