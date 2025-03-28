import { Avatar, Box, Card, Chip, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";

function getImagePath(taskId) {
  const imgPath = "images/employees";
  let img = taskId < 10 ? `0${taskId}` : taskId;
  img = `${imgPath}/${img}.png`;
  return img;
}
function getTaskColor(taskId) {
  const color = taskId % 6;
  return `custom-task-color-${color}`;
}
export default function TaskTemplate({ taskData, taskSize, taskResources }) {
  const taskProgress = taskData.progress;
  const taskColor =
    taskProgress === 100
      ? "green"
      : taskProgress >= 50
      ? "orange"
      : taskProgress >= 40
      ? "blue"
      : "rebeccapurple";

  return (
    <Paper elevation={3}>
      <Box
        bgcolor={taskColor}
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        color={"white"}
        width={`${taskSize.width}px`}
        gap={2}
        padding={1}
        // className={`${getTaskColor(taskData.id)}`}
      >
        {/* <Avatar>{taskData.title[0].toUpperCase()}</Avatar> */}
        <Box overflow={"hidden"}>
          <Typography
            fontSize={"1rem"}
            overflow={"hidden"}
            textOverflow={"ellipsis"}
          >
            {taskData.title}
          </Typography>
          {taskResources?.map((resource, index) => (
            <Chip
              label={resource.text[0]}
              key={index}
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "white",
              }}
            />
          ))}
        </Box>
      </Box>
    </Paper>

    // <div
    //   className={`custom-task ${getTaskColor(taskData.id)}`}
    //   style={{
    //     width: `${taskSize.width}px`,
    //     height: "auto",
    //     padding: "0.5em",
    //     marginTop:"5px",
    //     marginBottom:"5px"
    //   }}
    // >
    //   <div className="custom-task-img-wrapper">
    //     <img className="custom-task-img" src={getImagePath(taskData.id)} />
    //   </div>
    //   <div className="custom-task-wrapper">
    //     <div className="custom-task-title">{taskData.title}</div>
    //     <div className="custom-task-row">{taskResources[0]?.text}</div>
    //   </div>
    //   <div
    //     className="custom-task-progress"
    //     style={{ width: `${taskData.progress}%` }}
    //   ></div>
    // </div>
  );
}
