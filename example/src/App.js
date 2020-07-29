import React from 'react'

import { Button, Card, Dialog } from 'react-blended-components'
import 'react-blended-components/dist/index.css'

const App = () => {
  return (
    // <div style={{background: "#D3D3D3", padding: 50}}>
    //   <Card
    //     rootStyles={{}}
    //     childStyle={{textAlign: "center"}}
    //     header="Testing the Amazing button"
    //   >
    //     <Button label="Testing New Button" />
    //   </Card>
    // </div>

    <div style={{ background: '#D3D3D3', padding: 50 }}>
      <Dialog
        active={true}
        header='Testing the Amazing button'
        body="Body of this Modal"
        footer={
          <Button 
            label="Test"
            type="PRIMARY"
            size="LARGE"
          />
        }
     >
      </Dialog>
    </div>
  )
}

export default App
