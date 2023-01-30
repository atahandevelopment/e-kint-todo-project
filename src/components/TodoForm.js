import React from "react";
import {  useEffect } from "react";
import {
  Button,
  Form,
  Input,
  Select,
  DatePicker,

} from "antd";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';


dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const range = (start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};


const statusObj = [
  {
    id: 1,
    name: "Completed",
  },
  {
    id: 2,
    name: "In Progress",
  },
  {
    id: 3,
    name: "Not Started",
  },
];

const TodoForm = ({ initialValues, setIsEditing, dataSource, setDataSource }) => {

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue({
        todo: initialValues.todo,
        description: initialValues.description,
        completed: initialValues.completed,
        date: initialValues.date
      });
      
    }
  }, [initialValues]);
  console.log(initialValues);
  const { Option } = Select;

  const [form] = Form.useForm();
  
  
  
  const onFinish = async (values) => {
    console.log(values.date)
    if(initialValues) {
      
      console.log(dataSource)
      let newObj = {
        id:initialValues.id, ...values, date:dayjs(values.date).format('DD-MM-YYYY HH:mm:ss')
      }
      let arr = dataSource.filter ((obj)=> obj.id !== initialValues.id )
      arr.push(newObj);
      arr.sort( (a,b)=> a.id-b.id);

      setDataSource([...arr])
      setIsEditing(false)
    }else {
      
      let newObj = {
        id:dataSource.length+5, ...values, date:dayjs(values.date).format('DD-MM-YYYY HH:mm:ss')
      }
       setDataSource([...dataSource, newObj])
      console.log(values, newObj);
      form.resetFields()
    }
    
  };
  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day');
  };
  const disabledDateTime = () => ({
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  });


  return (
    <>

      <div >
        <Form
          
          className="todoform"
          form={form}
          onFinish={onFinish}
          layout={"vertical"}
          name="todoForm"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            className="todoname"
            label="Todo Name"
            wrapperCol={{
              span: 24,
            }}
            labelCol={{ span: 24 }}
            name="todo"
            rules={[
              {
                required: true,
                message: "Please enter a new Todo Name",
              },
              {
                type: "string",
                min: 1,
                max: 500,
               
              },
            ]}
          >
            <Input placeholder={"Enter the Todo Name"}/>
          </Form.Item>
          <Form.Item
            className="tododescription"
            label="Description"
            wrapperCol={{
              span: 24,
            }}
            labelCol={{ span: 24 }}
            name="description"
            rules={[
              {
                required: true,
                message: "Please enter a description for Todo",
              },
              {
                type: "string",
                min: 1,
                max: 500,
                
              },
            ]}
          >
            <Input placeholder={"Enter the Description"} />
          </Form.Item>
          <Form.Item
          className="tododate"
            label="Finish Date"
            wrapperCol={{
              span: 24,
            }}
            labelCol={{ span: 24 }}
            name="date"
            rules={[
              {
                required: false,
                message: "Please select date for Todo",
              },
              
            ]}
            
          >
      <DatePicker
      format="YYYY-MM-DD HH:mm:ss"
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      showTime={{
        defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
      }}
    />
          </Form.Item>
         
          <Form.Item
            className="status"
            label="Status"
            wrapperCol={{
              span: 24,
            }}
            labelCol={{ span: 24 }}
            name="completed"
            rules={[
              {
                required: true,
                message: "Please select a status",
              },
            ]}
            
          >
            <Select
              placeholder={"Select a Status"}
              style={{
                width: "100%",
              }}
            >
              {" "}
              {statusObj.map((status, index) => (
                <Option
                  key={index}
                  value={status.name}
                >
                  {status.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
                 
          <Form.Item>
            <Button htmlType="submit" style={{backgroundColor:"#0275d8", marginTop:"31px", color:"white"}} className="newTodo-btn" >
              {
              initialValues ? "Update Todo" : "Add New Todo"
             
              }
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default TodoForm;
