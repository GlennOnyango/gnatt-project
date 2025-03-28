import 'devextreme/dist/css/dx.light.css';
import 'devexpress-gantt/dist/dx-gantt.min.css';
import React, { useState } from 'react';

import Gantt, {
  Tasks,
  Dependencies,
  Resources,
  ResourceAssignments,
  Column,
  Editing,
  Toolbar,
  Item,
  Validation,
} from 'devextreme-react/gantt';

import {
  Box, FormControl, InputLabel, Select,
} from '@mui/material';
import {
  tasks, dependencies, resources, resourceAssignments,
} from '../data.js';
import TaskTemplate from '../TaskTemplate.jsx';
import TicketDialog from '../components/TicketDialog.jsx';

export default function Landing() {
  const [duration, setDuration] = useState('days');
  const [enableEditing, setEnableEditing] = useState(true);

  const [open, setOpen] = useState(false);
  const [tickets, setTickets] = useState([]);

  return (
    <React.Fragment>
      <TicketDialog open={open} setOpen={setOpen} ticketsIdsArray={tickets} />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'start',
          padding: '1rem',
          height: '100vh',
          gap: '0.5em',
          backgroundColor: 'bisque',
        }}
      >
        <Box width="100%" display="flex" flexDirection="row" gap={2}>
          <FormControl
            variant="outlined"
            style={{ backgroundColor: 'white', width: '19%' }}
          >
            <InputLabel htmlFor="outlined-duration-native-simple">
              Duration
            </InputLabel>
            <Select
              native
              value={duration}
              onChange={(data) => setDuration(data.target.value)}
              label="Duration"
              inputProps={{
                name: 'duration',
                id: 'outlined-duration-native-simple',
              }}
            >
              <option value="auto">Auto</option>
              <option value="days">Days</option>
              <option value="weeks">Weeks</option>
              <option value="months">Months</option>
              <option value="quarters">Quarters</option>
              <option value="sixHours">Six Hours</option>
              <option value="years">Years</option>
            </Select>
          </FormControl>

          <FormControl
            variant="outlined"
            style={{ backgroundColor: 'white', width: '19%' }}
          >
            <InputLabel htmlFor="outlined-duration-native-simple">
              Enable Editing
            </InputLabel>
            <Select
              native
              value={enableEditing}
              onChange={(data) => setEnableEditing(data.target.value)}
              label="Duration"
              inputProps={{
                name: 'duration',
                id: 'outlined-duration-native-simple',
              }}
            >
              <option value={true}>Enabled</option>
              <option value={false}>Disable</option>
            </Select>
          </FormControl>
        </Box>

        <Gantt
          rootValue={0}
          style={{
            width: '100%',
            height: 'auto', // Allow height to expand
            minHeight: '70vh',
            maxHeight: '90vh', // Prevent excessive expansion
            overflowY: 'auto',
          }}
          taskListWidth={500}
          scaleType={duration}
          taskContentRender={TaskTemplate}
          onTaskClick={(e) => {
            console.log('Tickets event', e);

            const taskId = e.data.id;

            const task = tasks.find((t) => t.id === taskId);

            setTickets(task.tickets);

            setOpen(true);
          }}
        >
          onTaskDblClick=
          {(data) => {
            data.event.preventDefault();
            alert('This task was double-clicked', data);
          }}
          <Tasks dataSource={tasks} />
          <Dependencies dataSource={dependencies} />
          <Resources dataSource={resources} />
          <ResourceAssignments dataSource={resourceAssignments} />
          <Toolbar>
            <Item name="undo" />
            <Item name="redo" />
            <Item name="separator" />
            <Item name="collapseAll" />
            <Item name="expandAll" />
            <Item name="separator" />
            <Item name="addTask" />
            <Item name="deleteTask" />
            <Item name="separator" />
            <Item name="zoomIn" />
            <Item name="zoomOut" />
          </Toolbar>
          <Column dataField="title" caption="Subject" width={300} />
          <Column dataField="start" caption="Start Date" />
          <Column dataField="end" caption="End Date" />
          <Validation autoUpdateParentTasks />
          <Editing enabled={enableEditing} />
        </Gantt>
      </div>
    </React.Fragment>
  );
}

