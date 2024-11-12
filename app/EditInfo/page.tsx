"use client";

//the modal should shrink after the edit submit for user to check the screen if they want before edit other records

//import './page.module.css'

import { FormAdd } from '@/components/Form/FormAdd/FormAdd';

import DataAPI from './dataAPI.js'
import { useState } from "react";

const EditInfo = () => {
  const [textSelected, selectText] = useState('hello')
  function ClickCell(e){
    // console.log(e.target)
    const td:HTMLTableCellElement = e.target
    // td.style.backgroundColor = 'red'
    if (td) {selectText(td.textContent)}
  }

  const [Data,setData] = useState([])

  const [textInput,getText] = useState('text here')
  function Edit(e){
    const element: HTMLInputElement = e.target
    getText(element.value)
  }

  function CallAPI(){
    setData(textInput.split('\n'))
  }

  return (
<>
    <div className='ml-16 bg-[green] w-1/2 md:ml-2 md:w-full'>

      <textarea cols={40} rows={4} value={textInput} className='float-right border-solid border border-[red] rounded-lg'
        onChange={(e)=>{Edit(e)}}
      ></textarea>

      <button className='bg-[blue] text-[white] border-solid border-2 border-[red] p-2'
      onClick={()=>{CallAPI()}}
      >
        Call API</button>

      <input type='text' value={textInput} className='block mt-4 pl-4 h-8 rounded-lg border-solid border border-[black]'
        onChange={(e)=>{Edit(e)}}
        // onMouseLeave={(e)=>{alert(textInput);e.target.value=''}}
        // onPointerEnter={(e)=>{alert(textInput)}}

        onKeyDown={(e)=>{if(e.which==13){     
          const addText = Data
          addText.push(textInput)
          getText('')
          setData(addText)}}}
      ></input>

      <table className="database mt-4">
      <caption className='text-[white]' > input data to table</caption>
      <thead>
        <tr>
          <th>STT</th>
          <th>RememberedName</th>
          {/* <th>CreatedAt</th>
          <th>UpdatedAt</th> */}
        </tr>
      </thead>
      <tbody>
        {Data.map((row,i)=>{
          return(
            <tr>
                <td>{i+1}</td>
                <td>{row}</td>
            </tr>
          )
        })}

      </tbody>
      <tfoot>
        
      </tfoot>
    </table>

    </div>

{/*     <div contentEditable className='w-[400px] ml-[200px] mt-4 inline-block'
    onChange={(e)=>{console.log(e.target); Edit(e)}}
    onClick={(e)=>{Edit(e)}}
    >
      {textInput}
    </div>
    <p contentEditable className='w-[400px] ml-[100px] inline-block'>Text here also</p> */}

    <table className="database mt-[50px] ml-auto mr-auto">
      <caption className='sticky top-[50px] z-20 w-full'> 
        {'Data from https://web-app-next-lac.vercel.app/api/GetPost/1'}
        <p className='bg-[yellow] w-full'>{textSelected}</p>
      </caption>
      <thead>
        <tr>
          <th>STT</th>
        {Object.keys(DataAPI[0]).map((col,i) => {
          return(
            <th key={i}>{col}</th> //plugin say error but dev complier allow and executable
          )
        }
        )}
        </tr>
      </thead>
      <tbody>
        {DataAPI.map((item,i) => {
          return(
            <tr key={i}>
              <td>{i+1}</td>
              {Object.keys(item).map((col,i) => {
                return(
                  <td key={i} className=' hover:bg-[yellow]'
                    onMouseEnter ={(e)=>{ClickCell(e)}}
                  >
                      {String(item[col])}
                  </td> //plugin say error but dev complier allow and executable
                )
              }
              )}
            </tr>
          )
        }

        )}

      </tbody>
      <tfoot>

      </tfoot>
    </table>

    <div>
        <FormAdd />
    </div>
</>
  );
};

export default EditInfo;
