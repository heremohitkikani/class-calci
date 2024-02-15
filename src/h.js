import './App.css';
import { useState } from 'react';

// import App from "./App.js";
function App() {

    let [sign, setsign] = useState("");
    let [temp, settemp] = useState("");
    let [fval, fsetval] = useState("");
    //   let [sval,ssetval]=useState("");
    let [del, setdel] = useState("");

    let getdata = (a) => {
        settemp(temp + a);
    }

    let eqa = (s) => {
        setsign(s);
        fsetval(temp)
        settemp('')
    }

    let equal = () => {
       let tem=0;

        if (sign == '+') {
            settemp(String(parseInt(fval) + parseInt(temp)));
        }
        if (sign == '-') {
            settemp(String(parseInt(fval) - parseInt(temp)));
        }
        if (sign == '*') {
            settemp(String(parseInt(fval) * parseInt(temp)));
        }
        if (sign == '/') {
            
            if(temp==0){
                settemp('can not divide to 0')
            }
            else{
                settemp(String(parseInt(fval) / parseInt(temp)));
            }
        }
        if (sign == "%") {
            settemp(String(parseInt(fval) % parseInt(temp)));
        }
    }

    return (
        <>
            <div style={{ border: ' 4px black solid', width: ' 280px' }} className="div">
                <form name="form1">
                    {/* <table class="screen"> */}

                    <input type="text" value={temp} name="main" className="main" placeholder="CALCULATION"></input>

                    {/* </table> */}

                    <table class="border">

                        <tr>
                            <td><input type="button" name="" class="clr" value="CLR" style={{ padding: " 10px 0px 10px 1px" }} onClick={() => {
                                settemp(temp.substring(0,temp.length-1))
                            }} ></input></td>
                            <td><input type="button" name="" value="%" style={{ padding: " 10px 20px " }} onClick={() => eqa('%')}></input></td>
                            <td><input type="button" class="clear" name="" value="C" style={{ padding: " 10px 20px" }} onClick={() =>  settemp("")} ></input></td>
                            <td><input type="button" name="" value="/" style={{ padding: " 10px 20px" }} onClick={() => eqa('/')}></input></td>


                        </tr>

                        <tr>
                            {/* <td><input type="button" name="" value="7" style={{ padding: " 10px 20px" }} onClick={()=>getdata(7)}></input></td> */}
                            <td><input type="button" name="" value="7" style={{ padding: " 10px 20px" }} onClick={(e) => {
                                settemp(temp + e.target.value)
                            }}></input></td>
                            <td><input type="button" name="" value="8" style={{ padding: " 10px 20px" }} onClick={() => getdata(8)}></input></td>
                            <td><input type="button" name="" value="9" style={{ padding: " 10px 20px" }} onClick={() => getdata(9)}></input></td>
                            <td><input type="button" name="" value="*" style={{ padding: " 10px 20px" }} onClick={() => eqa("*")}></input></td>
                        </tr>

                        <tr>
                            <td><input type="button" name="" value="4" style={{ padding: " 10px 20px" }} onClick={() => getdata(4)}></input></td>
                            <td><input type="button" name="" value="5" style={{ padding: " 10px 20px" }} onClick={() => getdata(5)}></input></td>
                            <td><input type="button" name="" value="6" style={{ padding: " 10px 20px" }} onClick={() => getdata(6)}></input></td>
                            <td><input type="button" name="" value="-" style={{ padding: " 10px 20px" }} onClick={() => eqa("-")}></input></td>
                        </tr>

                        <tr>
                            <td><input type="button" name="" value="1" style={{ padding: "10px 20px" }} onClick={() => getdata(1)} ></input></td>
                            <td><input type="button" name="" value="2" style={{ padding: "10px 20px" }} onClick={() => getdata(2)} ></input></td>
                            <td><input type="button" name="" value="3" style={{ padding: "10px 20px" }} onClick={() => getdata(3)} ></input></td>
                            <td rowSpan={2}><input class="plus" type="button" name="" value="+" style={{ padding: " 10px 20px" }} onClick={() => { eqa("+") }} ></input></td>
                        </tr>

                        <tr>
                            <td><input type="button" name="" value="0" style={{ padding: " 10px 20px" }} onClick={() => getdata(0)} ></input></td>
                            <td><input type="button" name="" value="." style={{ padding: " 10px 20px" }} onClick={() => getdata('.')} ></input></td>
                            <td><input type="button" name="" value="=" style={{ padding: " 10px 20px" }} onClick={() => equal()} ></input></td>


                        </tr>
                    </table>
                </form>
            </div>

        </>
    );
}

export default App;
// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App() {

//     let [sign, setsign] = useState("");
//     let [temp, settemp] = useState("");
//     let [fval, fsetval] = useState("");
//     //   let [sval,ssetval]=useState("");
//     let [del, setdel] = useState("");

//     let Ans = (a) => {
//         settemp(temp + a);
//     }

//     let fdata = (s) => {
//         setsign(s);
//         fsetval(temp)
//         settemp('')
//     }

//     let ldata = () => {
//         // ssetval(temp)
//         // alert(sval)

//         if (sign == '+') {
//             settemp(parseInt(fval) + parseInt(temp));
//         }
//         if (sign == '-') {
//             settemp(parseInt(fval) - parseInt(temp));
//         }
//         if (sign == '*') {
//             settemp(parseInt(fval) * parseInt(temp));
//         }
//         if (sign == '/') {
//             settemp(parseInt(fval) / parseInt(temp));
//         }
//         if (sign == "%") {
//             settemp(parseInt(fval) % parseInt(temp));
//         }
//     }

//     const clr = (s) => {
//         if (s == 'c') {
//             settemp("");
//         }
//         else {
//             setdel(temp.substring(0, temp.length - 1));
//             settemp(del);
//         }
//     }
//     // function fdata(s){
//     // 	smb=s;
//     // 	fvalue=document.getElementById('ans2').value;
//     // 	document.getElementById('ans2').value='';
//     // }
//     // function ldata(){
//     // 	lvalue=document.getElementById('ans2').value;
//     // 	document.getElementById('ans2').value='';
//     // 	if(smb=="+"){
//     // 		ans=parseInt(fvalue)+parseInt(lvalue);
//     // 		document.getElementById('ans2').value=ans;
//     // 	}
//     // 	if(smb=="-"){
//     // 		 ans=parseInt(fvalue)-parseInt(lvalue);
//     // 		document.getElementById('ans2').value=ans;	
//     // 	}
//     // 	if(smb=="*"){
//     // 		ans=parseInt(fvalue)*parseInt(lvalue);
//     // 		document.getElementById('ans2').value=ans;
//     // 	}
//     // 	if(smb=="/"){
//     // 		ans=parseInt(fvalue)/parseInt(lvalue);
//     // 		document.getElementById('ans2').value=ans;
//     // 	}

//     // }
//     // function clr(s) {
//     // 	if(s=='c'){
//     // 		document.getElementById('ans2').value='';
//     // 	}
//     // 	else{
//     // 		var c=document.getElementById('ans2').value;
//     // 		var cl=c.substring(0,c.length-1);
//     // 		document.getElementById('ans2').value=cl;
//     // 	}	

//     // }
//     return (
//         <>
//             <div className="main">
//                 <div className="ans">
//                     <input type="text" value={temp} id="ans2"></input>
//                 </div>
//                 <div class="first">
//                     <input type="button" name="" id="C" value="C" onClick={() => clr("c")}></input>
//                     <input type="button" name="" id="Del" value="Del" onClick={() => clr("")}></input>
//                     <input type="button" name="" id="%" value="%" onClick={() => fdata('%')}></input>
//                     <input type="button" name="" id="/" value="/" onClick={() => fdata("/")}></input>
//                 </div>
//                 <div class="first">
//                     <input type="button" name="" id="7" value="7" onClick={() => Ans(7)}></input>
//                     <input type="button" name="" id="8" value="8" onClick={() => Ans(8)}></input>
//                     <input type="button" name="" id="9" value="9" onClick={() => Ans(9)}></input>
//                     <input type="button" name="" id="X" value="X" onClick={() => fdata('*')}></input>
//                 </div>
//                 <div class="first">
//                     <input type="button" name="" id="4" value="4" onClick={() => Ans(4)}></input>
//                     <input type="button" name="" id="5" value="5" onClick={() => Ans(5)}></input>
//                     <input type="button" name="" id="6" value="6" onClick={() => Ans(6)}></input>
//                     <input type="button" name="" id="-" value="-" onClick={() => fdata('-')}></input>
//                 </div>
//                 <div class="first">
//                     <input type="button" name="" id="1" value="1" onClick={() => Ans(1)}></input>
//                     <input type="button" name="" id="2" value="2" onClick={() => Ans(2)}></input>
//                     <input type="button" name="" id="3" value="3" onClick={() => Ans(3)}></input>
//                     <input type="button" name="" id="+" value="+" onClick={() => fdata('+')}></input>
//                 </div>
//                 <div class="first">
//                     <input type="button" name="" id="0" value="0" onClick={() => Ans(0)}></input>
//                     <input type="button" name="" id="." value="." onClick={() => Ans('.')}></input>
//                     <input type="button" name="" id="=" value="=" onClick={() => ldata()}></input>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default App;

