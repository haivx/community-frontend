import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Select } from 'antd'
import { usePost } from "@common/hooks"
import { Editor, Alert } from "@common/components";
import { PostType } from "./types"
import { Wrapper, HeaderWrapper, BtnActionWrap } from './styles'

const { TextArea } = Input
const { Option } = Select


const CreatePost = () => {
  const [form] = Form.useForm();
  const postCtx = usePost();
  const onFinish = async (data: PostType) => {
    try {
      await postCtx.onCreatePost(data);
      Alert({
        message: "Create post success",
        type: "success"
      });
      form.resetFields();
    } catch (error) {
      Alert({
        message: error,
        type: "error"
      });
    }
  }

  const onChangeVal = (name: string) => (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    postCtx.onSetDraftPost({
      ...postCtx?.draftPost,
      [name]: typeof e === "string" ? e : e.target.value
    })
  }

  const onChangeEditor = (value: string) => {
    postCtx.onSetDraftPost({
      ...postCtx?.draftPost,
      content: value
    })
  }

  const formItemLayout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 21 },
  }

  return (
    <Wrapper>
      <Form form={form} name="form_post_create" {...formItemLayout} onFinish={onFinish}>
        <HeaderWrapper>FORM CREATION</HeaderWrapper>
        <Form.Item name="category" label="Category" hasFeedback rules={[{ required: true, message: 'Please select your category!' }]}>
          <Select style={{ width: 240 }} onChange={onChangeVal("category")}>
            <Option value="CAREER_STORY">Chuyện nghề</Option>
            <Option value="FRONT_END">FrontEnd</Option>
            <Option value="BACK_END">BackEnd</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Title" name="title">
          <Input type="text" placeholder="Title" onChange={onChangeVal("title")} />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <TextArea placeholder="description" onChange={onChangeVal("description")} />
        </Form.Item>
        <Form.Item label="Content" name="content">
          <Editor name="content" form={form} onChange={onChangeEditor} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 3 }}>
          <BtnActionWrap>
            <Button type="primary" htmlType="submit" size="middle">
              Submit
            </Button>
            <Link target="_blank" to="/admin/post/preview" >
              <Button type="primary" ghost size="middle">
                Preview
              </Button>
            </Link>
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
