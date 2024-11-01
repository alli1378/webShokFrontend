import React from 'react'
import { EditorState,convertToRaw,convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// const editor = () => {
//     renderEmpty(){
//     return (
//         <div>
//            <Editor
//             editorState={editorState}
//             toolbarClassName="toolbarClassName"
//             wrapperClassName="wrapperClassName"
//             editorClassName="editorClassName"
//             onEditorStateChange={this.onEditorStateChange}
//             /> 
//         </div>
//     )
//     }
// }

// export default editor
const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

class Editorr extends React.Component{
    constructor(props) {
        super(props);
        
        const contentState = convertFromRaw(content);
        this.state = {
        contentState,
      }
    }
    state={
        editorState:EditorState.createEmpty()

    }
    onEditorStateChange=(editorState)=>{
        this.setState({editorState,})
    }
    onContentStateChange=(contentState) => {
        this.setState({
          contentState,
        });
      };
      
    render(){
        const {editorState,contentState}=this.state
        console.log(contentState);
        return(
            <div>
           <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
            onContentStateChange={this.onContentStateChange}
            /> 
        </div>
        )
    }
}
export default Editorr
