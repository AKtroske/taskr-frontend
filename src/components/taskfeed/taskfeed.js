import React, { useState, useEffect, useContext, useCallback } from 'react';
import {
  useHistory
} from 'react-router-dom';

import Loader from 'react-loader-spinner'

import {
  handleDelete
} from './services';

import useFetch from '../../hooks/useFetch';
import useModal from '../../hooks/useModal';

import {
  Row
} from '../general/general';

import {
  RedirectButton
} from '../general/button';

import {
  Wrapper,
  InfoText
} from './styles';

import Task from './task';
import TaskModal from '../taskModal/taskModal';
import Modal from '../modal/modal'

import { TaskAddedContext } from '../../context/taskAddedContext';
import { UserContext } from '../../context/userContext';

const TaskFeed = props => {

  let { added, setAdded } = useContext(TaskAddedContext);
  let { userInfo, setUserInfo } = useContext(UserContext);

  let history = useHistory();

  // hooks
  // Update wehn added
  const { response, error } = useFetch('tasks/user');
  const { view, toggle } = useModal();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState({success:false, message:'', loggedOut:false});

  const [taskData, setTaskData] = useState({});



  useEffect(() => {
    function responseHandler() {
      if (error) {
        console.log(error) // ****** SET OVERARCHING ERROR ******//
      }
      else if (response){
        setLoading(false);
        if (response.success){
          setData(response.message)
        } else if (response.message === "Unauthorized Access"){
          setNoData({success:true, message:'You are not logged in. Please log in to create a task', loggedOut:true})
        } else {
          setNoData({success:true, message:'No tasks entered! Enter one above.'})
        }
      }
    }
    responseHandler()
  }, [response, error]);

  useEffect(() => {
    if (Object.keys(data).length!==0){
      setLoading(false)
      setNoData({success:false})
    }
  }, [data]);

  const handleDeleteClick = useCallback((task) => {
    const info = {published:task.published, accepted:task.is_accepted, cost:task.cost, creator:task.creator_id};
    handleDelete('tasks/delete/', task.id, info)
    if (!task.accepted){
      let newWallet = parseFloat(userInfo.wallet) + parseFloat(task.cost);
      setUserInfo(prevState => ({...prevState, wallet: newWallet}))
    }
    setData(data.filter(item => item.id !== task.id))
  });

  const handleEditClick = useCallback((task) => {
    console.log(task);
    setTaskData(task);
    toggle();
  })

  if (loading) {
    return (
      <Wrapper>
        <InfoText>
          <Loader
             type="Oval"
             color={"rgba(16,2,133,1.0)"}
             height={45}
             width={45}
             timeout={5000}
          />
        </InfoText>
      </Wrapper>
    );
  } else if (noData.success) {
    return (
      <Wrapper>
        <InfoText>{noData.message}</InfoText>
        {noData.loggedOut &&
          <Row jc='center'my='10px'>
            <RedirectButton name='login'
            w={'100px'}
            h={'40px'}
            fontsize={'1.1em'}
            bgcolor={props => props.theme.colors.secBold}
            >
            Log in
            </RedirectButton>
          </Row>
        }
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Modal view={view} close={toggle}>
          <TaskModal
            close={toggle}
            action={'Edit'}
            task={taskData}
            bgcolor={props=>props.theme.colors.primary}
          />
        </Modal>
          {data.map((task, index) => (
            <Task
              key={task.id}
              index={index}
              task={task}
              handleDelete={handleDeleteClick}
              handleEdit={handleEditClick}
            />
          ))}
      </Wrapper>
    );
  }
}

export default TaskFeed;
