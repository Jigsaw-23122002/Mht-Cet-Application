function PhysicsPractice11(props){
    return (
        <div id="PhysicsLinks" className="SectionalDivision">
            <div>
            <a href="https://drive.google.com/drive/u/0/folders/1QiVIi8V2Qg7RnU_3O0HKeV9vkLBCsyAr"><b>1.</b>Gravitation</a>
            </div>
            <br/>
            <div>
            <a href="https://drive.google.com/drive/u/0/folders/1dX_kYOeGB77Vdy6qwT9zYMzo3p85DV2C"><b>2.</b>Thermal Properties of Matter</a>
            </div>
            <br/>
            <div>
            <a href="https://drive.google.com/drive/u/0/folders/1TzKtHt7iC94bHGo6SANdHMEPnggUDq5u"><b>3.</b>Optics</a>
            </div>
            <br/>
            <div>
            <a href="https://drive.google.com/drive/u/0/folders/1Ca3PkXVFeVd9-Fca2UePV8THfo7UWIHh"><b>4.</b>Laws of Motion</a>
            </div>
            <br/>
            <button onClick={()=>{props.value()}} style={{color:"white",height:"55px",width:"55px",borderRadius:"50%",margin:"10px",color:"white",alignSelf:"center" ,backgroundColor:"black"}}>&#x21e7;</button>
        </div>
    );
}

export default PhysicsPractice11;