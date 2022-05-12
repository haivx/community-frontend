import React from 'react'
import { Form, Input, Button, Select } from 'antd'
import { usePost } from "@common/hooks"
import { PostType } from "./types"
import { Wrapper, HeaderWrapper, BtnActionWrap } from './styles'

const { TextArea } = Input
const { Option } = Select


const CreatePost = () => {
  const postCtx = usePost();
  const onFinish = (data: PostType) => {
    console.log({
      data,
    })
  }

  const onChangeVal = (name: string) => (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    postCtx.onSetDraftPost({
      ...postCtx?.draftPost,
      [name]: typeof e === "string" ? e : e.target.value
    })
  }

  const formItemLayout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 21 },
  }
  return (
    <Wrapper>
      <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
        <HeaderWrapper>FORM CREATION</HeaderWrapper>
        <Form.Item name="category" label="Category" hasFeedback rules={[{ required: true, message: 'Please select your category!' }]}>
          <Select style={{ width: 240 }} onChange={onChangeVal("category")}>
            <Option value="story">Chuyện nghề</Option>
            <Option value="frontEnd">FrontEnd</Option>
            <Option value="backend">BackEnd</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Title" name="title">
          <Input type="text" placeholder="Title" onChange={onChangeVal("title")} />
        </Form.Item>
        <Form.Item label="Content" name="content">
          <TextArea onChange={onChangeVal("content")} rows={15} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 3 }}>
          <BtnActionWrap>
            <Button type="primary" htmlType="submit" size="middle">
              Submit
            </Button>
            <Button type="primary" ghost size="middle">
              Preview
            </Button>
            <Button danger size="middle">
              Cancel
            </Button>
          </BtnActionWrap>
        </Form.Item>
      </Form>
    </Wrapper>
  )
}

export default CreatePost
