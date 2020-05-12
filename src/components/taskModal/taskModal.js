import React, { useState, useContext, useEffect } from 'react';

import taskValidate from './taskValidate';
import useForm from '../../hooks/useForm';
import { postData, updateData } from './services';


import {
  ModalContainer,
  ModalSlider,
  ModalHeader,
  FormContainer,
  FormRow,
  FormColOne,
  FormButton
} from './styles';

import {
  Header,
  IconContainer,
  Exit,
  Text,
  FormLabel,
  ErrorLabel,
  Input,
  Col,
  Select,
  TextArea
} from '../general/general';

import { TaskAddedContext } from '../../context/taskAddedContext';
import { UserContext } from '../../context/userContext';

const TaskModal = props => {

  const { close, action, task, bgcolor } = props;

  let { setAdded } = useContext(TaskAddedContext)
  let { userInfo, setUserInfo } = useContext(UserContext)

  const [other, setOther] = useState(false)

  const{
    errors,
    setErrors,
    values,
    handleChange,
    handleSubmit
  } = useForm(submitTask, taskValidate);

  useEffect(() => {
    const setValues = () => {
      if (task){
        values.priority = task.priority
        values.header = task.header
        values.cost = task.cost
        values.type = task.type
        values.description = task.description
        values.date = task.date_expected
        values.groups = task.group
      }
    }
    setValues();
  }, [task]);

  const [submitError, setSubmitError] = useState("")

  const otherHandler = (event) => {
    if (event.target.value === 'Other'){
      setOther(true);
    } else {
      setOther(false);
    }
    handleChange(event);
  };


  function submitTask(){
    console.log(values)
    if ((values.cost > userInfo.wallet) && values.published === 'on'){
      setErrors({cost : 'Not enough funds'});
      return
    } else {
      let newWallet = parseFloat(userInfo.wallet) - parseFloat(values.cost);
      setUserInfo(prevState => ({...prevState, wallet: newWallet}))
    }

    var info = {
      header: values.header,
      priority: values.priority,
      cost:values.cost,
      type:values.type,
      description:values.description,
      date_expected:values.date,
      groups:values.group,
      published:values.published,
    }

    if (task){
      updateData(info, `tasks/edit/${task.id}`)
        .then(res => {
          if (res){
            if(res.success){
              close();
              setAdded(true)
            }
            else {
              setSubmitError(res.message);
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      postData(info, 'tasks/create')
        .then(res => {
          if (res){
            if(res.success){
              close();
              setAdded(true)
            }
            else {
              setSubmitError(res.message);
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  return(
    <ModalContainer>
      <ModalHeader bgcolor={bgcolor}>
        <Header color={"white"} mx={"10px"}>{action} Task</Header>
        <IconContainer mx={"10px"} onClick={close} bgcolor={bgcolor}><Exit size="40"/></IconContainer>
      </ModalHeader>
      <ModalSlider>
        <FormContainer onSubmit={handleSubmit} noValidate>
          {submitError && <ErrorLabel>{submitError}</ErrorLabel>}
          <FormRow>
            <Col flex={'1'}>
              <FormLabel htmlFor='text'>Title:</FormLabel>
              <Input
                type="text"
                name="header"
                placeholder="Draft an email..."
                w={'100%'}
                px={'0'}
                value={values.header || '' || (task && task.header)}
                onChange={handleChange}
              />
              {errors.header && <ErrorLabel>{errors.header}</ErrorLabel>}
            </Col>
          </FormRow>
          <FormRow my={"5px"}>
            <Col flex={'1 1 0'}>
              <FormLabel htmlFor='text'>Priority:</FormLabel>
              <Select
                name='priority'
                w={'100%'}
                py={'5px'}
                px={'0'}
                values={values.priority}
                onChange={handleChange}
                >
                <option hidden disabled selected value> 1-5 </option>
                <option value='1'>1-Low</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5-High</option>
              </Select>
              {errors.priority && <ErrorLabel>{errors.priority}</ErrorLabel>}
            </Col>
            <Col mx={'1em'} flex={'1 1 0'}>
              <FormLabel htmlFor='cost'>Price:</FormLabel>
              <Input
                name='cost'
                type='number'
                w={'100%'}
                py={'5px'}
                px={'0'}
                placeholder='10'
                fontsize={'1em'}
                value={values.cost || '' ||  (task && task.cost)}
                onChange={handleChange}
              />
              {errors.cost && <ErrorLabel>{errors.cost}</ErrorLabel>}
            </Col>
            <Col flex={'2 1 0'}>
              <FormLabel htmlFor='text'>Category:</FormLabel>
              <Select
                name='type'
                w={'100%'}
                py={'5px'}
                px={'0'}
                value={values.type}
                onChange={(event) => otherHandler(event)}
                >
                <option hidden disabled selected value>Type</option>
                <option value='Write draft'>Write draft</option>
                <option value='Edit'>Edit</option>
                <option value='Proofread'>Proofread</option>
                <option value='Deliver'>Delivery</option>
                <option value='Code'>Code - Edit/Write</option>
                <option value='Move'>Move</option>
                <option value='Advice'>Advice</option>
                <option value='Other'>Other...</option>
              </Select>
              {errors.type && <ErrorLabel>{errors.type}</ErrorLabel>}
            </Col>
          </FormRow>
          <FormRow>
            <Text fontsize={'0.7em'}> Price setting will only affect wallet amount if task is published.</Text>
          </FormRow>
          <FormRow my={"5px"} display={(other) ? 'flex' : 'none'}>
            <Col flex={'1'}>
              <FormLabel htmlFor='text'>Other (Category):</FormLabel>
              <Input
                type="text"
                name="other"
                placeholder="Describe"
                w={'100%'}
                px={'0'}
                disabled={!(other)}
                value={values.other || '' || (task && task.other)}
                onChange={handleChange}
              />
              {errors.other && <ErrorLabel>{errors.other}</ErrorLabel>}
            </Col>
          </FormRow>
          <FormRow my={'5px'}>
            <Col flex={'1'}>
              <FormLabel htmlFor='text'>Description (200 char max):</FormLabel>
              <TextArea
                type="text"
                name="description"
                placeholder="Describe..."
                w={'100%'}
                h={'150px'}
                py={'5px'}
                flex={'0 1 auto'}
                px={'0'}
                size='200'
                value={values.description || (task && task.description)}
                onChange={handleChange}
              />
              {errors.description && <ErrorLabel>{errors.description}</ErrorLabel>}
            </Col>
          </FormRow>
          <FormRow my={'5px'}>
            <Col flex={'2 1 0'}>
              <FormLabel htmlFor='date'>Finished by:</FormLabel>
              <Input
                py={'20px'}
                type="date"
                name="date"
                w={'100%'}
                px={'0'}
                values={values.date || (task && task.date_expected.slice(0,10))}
                onChange={handleChange}
              />
              {errors.date && <ErrorLabel>{errors.date}</ErrorLabel>}
            </Col>
            <Col mx={'1em'} flex={'2 1 0'}>
              <FormLabel htmlFor='type'>Add to Group:</FormLabel>
              <Select
                name='group'
                w={'100%'}
                py={'5px'}
                px={'0'}
                value={values.group}
                onChange={(event) => otherHandler(event)}
                >
                <option value='None' selected>None</option>
                <option value='Work'>Work</option>
                <option value='Home'>Home</option>
                <option value='Squad'>Squad</option>
              </Select>
              {errors.type && <ErrorLabel>{errors.type}</ErrorLabel>}
            </Col>
            <Col flex={'1 1 0'} display={(task) ? 'flex' : 'none'}>
              <FormButton w={'100%'} h={'50px'} type="submit" bgcolor={bgcolor}>{action}</FormButton>
            </Col>
          </FormRow>
          <FormRow my={'10px'} alignitems={'center'} display={(task) ? 'none' : 'flex'}>
              <FormLabel htmlFor='checkbox' mr={'5px'}>Publish:</FormLabel>
              <Input
                w={'16px'}
                h={'16px'}
                name='published'
                type='checkbox'
                checked={true}
                onChange={handleChange}
              />
            <Text textalign={'left'} fontsize={'0.7em'} mx={'10px'}>By checking "Publish" your task will be visible to everyone.</Text>
            <FormButton w={'40%'} h={'50px'} type="submit">{action}</FormButton>
          </FormRow>
        </FormContainer>
      </ModalSlider>
    </ModalContainer>
  );
};

export default TaskModal;
