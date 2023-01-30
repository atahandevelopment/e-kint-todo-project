import React from 'react'
import { Button, Space, Table, Modal, Input, Tag } from "antd";
import {SearchOutlined} from "@ant-design/icons";
import { useState, useRef } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Highlighter from 'react-highlight-words';
import TodoForm from "./TodoForm";
import { mockData, enumData } from './mockData';



function TodoList() {
    const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [updateObj, setUpdateObj] = useState({});
  const searchInput = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);





const [dataSource, setDataSource] = useState(mockData);


  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });



  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
      sorter:(record1,record2) =>{
        return record1.id > record2.id
      },
      ...getColumnSearchProps('id')
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "todo",
      sorter:(record1,record2) =>{
        return record1.todo > record2.todo
      },
      ...getColumnSearchProps('todo')
    },
    {
      key: "3",
      title: "Description",
      dataIndex: "description",
      sorter:(record1,record2) =>{
        return record1.description > record2.description
      },
      ...getColumnSearchProps('description')
    },
    {
      key: "4",
      title: "Date",
      dataIndex: "date",
      sorter:(record1,record2) =>{
        return record1.description > record2.description
      },
    
    },

    {
      key: "5",
      title: "Status",
      dataIndex: "completed",
      filters: [
        {text:"Complete", value:enumData[1]},
        {text:"In Progress", value:enumData[2]},
        {text:"Not Started", value:enumData[3]}
      ],
      onFilter: (value, record) => {
       return record.completed === value
      },
   
      render: (completed) => {
        return          completed == "Completed" ? (<Tag color="green">Completed</Tag>) : (completed == "In Progress" ? (<Tag color="blue">In Progress</Tag>) : (<Tag color="red">Not Started</Tag>)) 
        
    },
    },
    {
      key: "6",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                console.log(record);
                onEditTodo(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteTodo(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];



  const onDeleteTodo = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this Todo record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((todo) => todo.id !== record.id);
        });
      },
    });
  };
  const onEditTodo = (record) => {
    setUpdateObj(record);
    setIsEditing(true);
    setEditingTodo({ ...record });
  };
  return (
    <header className="App-header">
      <TodoForm  
      className="todoForm"
      setDataSource={setDataSource}
      dataSource={dataSource}
      />
        <Table 
        style={{boxShadow: "0 0  8px gray", borderRadius:"10px"}}
        columns={columns} 
        dataSource={dataSource}
        pagination={{
          current:page,
          pageSize:pageSize,
          total:dataSource.length,
          onChange:(page, pageSize)=> {
            setPage(page);
            setPageSize(pageSize);
          }
        }}
        ></Table>
        <Modal
          className='todoformcontainer'
          title="Edit Todo"
          open={isEditing}
          footer={false}
          onCancel={()=> setIsEditing(false)}

        >
          <TodoForm  
            
           initialValues={updateObj}
            setIsEditing={setIsEditing}
            dataSource={dataSource}
            setDataSource={setDataSource}
          />
        </Modal>
      </header>
  )
}

export default TodoList