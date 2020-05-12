import React, { useState, useMemo, useEffect } from 'react';

import {
  TaskContainer,
  TaskEntry,
  InfoItem,
  InfoText,
  Enum,
  ToolContainer,
  DeleteButton,
  EditButton,
  DeleteStyle,
  EditStyle
} from './styles';


const Task = (props) => {

  const { index, task, handleEdit, handleDelete} = props;

  return (
    <TaskContainer>
      <TaskEntry>
        <Enum>{index + 1}</Enum>
        <InfoItem><InfoText>{task.date_posted.slice(5,10).replace('-', '/')}</InfoText></InfoItem>
        <InfoItem><InfoText fontweight={'500'}>{task.header}</InfoText></InfoItem>
        <InfoItem><InfoText>{task.type}</InfoText></InfoItem>
        <InfoItem mobile><InfoText fontweight={'500'}>{task.priority}</InfoText></InfoItem>
        <InfoItem mobile><InfoText fontweight={'500'}>{task.cost}</InfoText></InfoItem>
        <InfoItem mobile><InfoText>{task.date_expected.slice(5,10).replace('-', '/')}</InfoText></InfoItem>
        <ToolContainer>
          <EditButton><EditStyle onClick={() => handleEdit(task)}/></EditButton>
          <DeleteButton><DeleteStyle onClick={() => handleDelete(task)} /></DeleteButton>
        </ToolContainer>
      </TaskEntry>
    </TaskContainer>
  )
}

export default Task;
