import React from 'react'

import {
  Button,
  Card,
  Dialog,
  Loader,
  Avatar,
  Form,
  FormElements
} from 'react-blended-components'
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

    // <div style={{ background: '#D3D3D3', padding: 50 }}>
    //   <Dialog
    //     active={true}
    //     header='Testing the Amazing button'
    //     body="Body of this Modal"
    //     footer={
    //       <Button
    //         label="Test"
    //         type="PRIMARY"
    //         size="LARGE"
    //       />
    //     }
    //  >
    //   </Dialog>
    // </div>

    <div style={{ background: '#D3D3D3', padding: 50 }}>
      <Dialog
        active={true}
        header={'Modal'}
        body={
          <div>

            <FormElements.Switch
              name="Test" 
              label="The Elemental Text" 
              placeholder="Please Write Something" 
              validation={null} 
              onChange={null}
              disabled={false}
              hidden={false}
              value="" 
              error=""
              // options={[
              //   {id: 'option-1', value: 'value-1', label: 'label-1'},
              //   {id: 'option-2', value: 'value-2', label: 'label-2'},
              //   {id: 'option-3', value: 'value-3', label: 'label-3'},
              //   {id: 'option-4', value: 'value-4', label: 'label-4'},
              // ]}
              // options={[
              //   {id: 'option-1', value: 'value-1', label: 'label-1'},
              //   {id: 'option-2', value: 'value-2', label: 'label-2'},
              //   {id: 'option-3', label: 'label-3', meta: [{id: 'option-3-1', value: 'value-3-1', label: 'label-3-1'}, {id: 'option-3-2', value: 'value-3-2', label: 'label-3-2'}]},
              //   {id: 'option-4', value: 'value-4', label: 'label-4'},
              // ]}
              autocomplete="off"
            />
            {/* <Loader
              active={true}
              headerStyle={{ textAlign: 'center' }}
              header={
                <div>
                  <Avatar name='Hello Dolly!' round={true} size={50} />{' '}
                  <span>Oh My!</span>
                </div>
              }
            ></Loader> */}
          </div>
        }
      />
    </div>
  )
}

export default App
