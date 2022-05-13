import { FormInstance } from 'antd'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import { Wrapper } from './styles'

interface EditorProps {
  form?: FormInstance;
  name?: string;
  onChange?: (value: string) => void;
}

const CustomEditor = ({ form, name, onChange }: EditorProps) => {
  const [value, setValue] = useState('')

  const handleOnChange = (val: string) => {
    setValue(val)
    onChange && onChange(val)
    form && name && form.setFieldsValue({
      [name]: val,
    })
  }

  return (
    <Wrapper>
      <ReactQuill
        theme="snow"
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            ['link', 'image'],
            ['clean'],
          ],
        }}
        formats={['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image']}
        value={value}
        onChange={handleOnChange}
      />
    </Wrapper>
  )
}

export default CustomEditor
