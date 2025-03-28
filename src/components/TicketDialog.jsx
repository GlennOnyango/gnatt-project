import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { tickets } from "../data.js";
import { useNavigate } from "react-router";

export default function TicketDialog({ open, setOpen, ticketsIdsArray }) {
  const navigate = useNavigate();
  const [ticketIds, setTicketIds] = useState(ticketsIdsArray);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setTicketIds(ticketsIdsArray);
  }, [ticketsIdsArray]);

  const ticketsObject = useMemo(() => {
    return ticketIds?.map((e) => {
      return tickets.find((ef) => ef.id === e);
    });
  }, [ticketIds]);

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      sx={{
        maxHeight: "100vh",
        overflowY: "auto",
      }}
    >
      <DialogTitle id="responsive-dialog-title">
        {"Associated Tickets"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText display={"flex"} flexDirection={"column"} gap={2}>
          This tickets are associated with the task. You can add other tickets
          to the taks.
          {ticketsObject.map((tick, index) => (
            <Card
              key={index}
              sx={{
                mt: "2",
              }}
            >
              <CardActionArea
                // onClick={() => setSelectedCard(index)}
                // data-active={selectedCard === index ? "" : undefined}
                sx={{
                  height: "100%",
                  backgroundColor: "beige",
                }}
              >
                <CardContent sx={{ height: "100%" }}>
                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                  >
                    <Typography variant="h5" component="div">
                      {tick.title}
                    </Typography>
                    <Box
                      display={"flex"}
                      flexDirection={"row"}
                      justifyContent={"space-around"}
                      gap={2}
                    >
                      <Chip
                        label="Detach"
                        onClick={() => {
                          setTicketIds((e) => {
                            console.log(e, tick);
                            const newTickId = e.filter((em) => em !== tick.id);
                            console.log("new Ticket ids", newTickId);
                            return newTickId;
                          });
                        }}
                        color="error"
                        variant="contained"
                      />
                      <Chip
                        label="View"
                        color="info"
                        variant="contained"
                        onClick={() => {
                          navigate(`/tickets/${tick.id}`);
                        }}
                      />
                    </Box>
                  </Box>
                  <Typography variant="body2">{tick.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
          <Autocomplete
            id="country-select-demo"
            sx={{ width: "100%" }}
            options={tickets}
            autoHighlight
            getOptionLabel={(option) => option.title}
            onChange={(_, newValue) => {
              if (newValue === null || newValue === undefined) {
                //setFormValues({ ...formValues, country: "Kenya" });
              } else {
                console.log("New value", newValue);
                setTicketIds((prev) =>
                  Array.from(new Set([...prev, newValue.id]))
                );
              }
            }}
            renderOption={(props, option) => {
              const { key, ...optionProps } = props;
              return (
                <Box
                  key={key}
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...optionProps}
                >
                  {option.title}
                </Box>
              );
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a ticket to associate it to a task"
                slotProps={{
                  htmlInput: {
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  },
                }}
              />
            )}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Close Dialog
        </Button>
      </DialogActions>
    </Dialog>
  );
}
