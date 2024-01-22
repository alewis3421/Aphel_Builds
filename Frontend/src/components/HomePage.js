import React, { Component } from 'react';
import './homepage.css';

export class Homepage extends Component {
    render() {
        return (
            <div className="homepage vert-center">
                <div className='title'>
                Welcome to<br></br>
                <h2 id='title2'>Aphel Builds</h2>
                Don't want to build your own pc well you've come to the right place <br/><br/>
                Want to build your own pc but want a place to build a list then you've also come to the right place<br/>
                
                <button>Build List</button>
                </div>
                <div className='builds'>
                    <div className='subtitle'>
                        Pre-Builts
                    </div>
                    <div className='displays'>
                        <div className='build'>
                            <img className='pc' src='https://www.fractal-design.com/app/uploads/2023/02/North_Charcoal_Mesh_1-Left-Front-540x540.jpg'></img> <br/>

                            Case: <br />
                            MotherBoard: <br />
                            CPU: <br />
                            GPU: <br />
                            RAM: <br />
                            PSU: <br />
                            Storage: <br />
                            Cooling: <br />
                        </div>
                        <div className='build'>
                            <img className='pc' src='https://www.fractal-design.com/app/uploads/2022/05/Meshify_2_RGB_Black_TGL_1-Front-Left-1-540x540.jpg'></img> <br/>
                        
                            Case: <br />
                            MotherBoard: <br />
                            CPU: <br />
                            GPU: <br />
                            RAM: <br />
                            PSU: <br />
                            Storage: <br />
                            Cooling: <br />
                        </div>
                        <div className='build'>
                            <img className='pc' src='https://www.fractal-design.com/app/uploads/2022/06/Pop_ATX_Air_RGB_Magenta_TGC_1-Front-Left-540x540.jpg'></img> <br/>
                        
                            Case: <br />
                            MotherBoard: <br />
                            CPU: <br />
                            GPU: <br />
                            RAM: <br />
                            PSU: <br />
                            Storage: <br />
                            Cooling: <br />
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}