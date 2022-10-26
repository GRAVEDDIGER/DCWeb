import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import styled from "@emotion/styled";
import { pagesCollection, rootRef, storage } from "../functions/firebase";
import { getDocs } from "firebase/firestore";
import { uploadBytes, ref } from "firebase/storage";

import {
  Button,
  FormControl,
  Stack,
  TextField,
  TextareaAutosize,
  ImageList,
  ImageListItem,
} from "@mui/material";
import useForm from "../hooks/useForm";
import { upload } from "@testing-library/user-event/dist/upload";
const initialTabs = [
  {
    label: "Create Tab",
    id: "1",
  },
];
const MainContainer = styled(Box)`
  margin-top: 200px;
`;
const initialForm = { title: "", description: "", images: [] };

function EntryForm({ value }) {
  const [formData, handleChange, setFormData] = useForm(initialForm);
  const handleClick = (e) => {
    const pickerOptions = {
      types: [
        {
          description: "Images",
          accept: {
            "image/*": [".png", ".gif", ".jpeg", ".jpg"],
          },
        },
      ],
      excludeAcceptAllOption: true,
      multiple: true,
    };
    window.showOpenFilePicker(pickerOptions).then((res) => {
      res
        .getFile()
        .then((image) => setFormData({ ...formData, images: image }));

      console.log("Form Data", formData.images);
      formData.images.map((res) => console.log(res, "mapeado"));
    });
  };
  return (
    <FormControl
      sx={{
        outline: "1px solid #d5d5d5",
        padding: "6rem",
        boxShadow: "2px 2px 15px #333",
        width: "100%",
      }}
    >
      <Stack direction="column" spacing={2} width="100%">
        <TextField
          label="Titulo"
          name="title"
          helperText="Titulo de la tarjeta"
          value={formData.title}
          onChange={handleChange}
          size="small"
          sx={{ width: "100%" }}
        />
        <TextareaAutosize
          minRows={5}
          label="Descripcion"
          name="description"
          helperText="Texto de la tarjeta"
          value={formData.description}
          onChange={handleChange}
          size="small"
          style={{ resize: "none" }}
        />
        <Button
          variant="contained"
          onClick={handleClick}
          size="small"
          sx={{ width: "30%", justifyContent: "center", alignSelf: "center" }}
          helperText="jpeg,gif,png,jpg"
        >
          Subir Imagen{" "}
        </Button>
        <img src={formData.images[0]} alt="texto" />
        <ImageList>
          {formData.images.map((image) => {
            <ImageListItem key={image}>
              <img src={image} alt={formData.title} />
            </ImageListItem>;
          })}
        </ImageList>
      </Stack>
    </FormControl>
  );
}

function LabTabs({ tabs, setTabs }) {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <TabList
        sx={{ width: "100%" }}
        onChange={handleChange}
        aria-label="lab API tabs example"
      >
        {tabs.map((page) => (
          <Tab label={page.label} value={page.id} key={page.id} />
        ))}
      </TabList>
      <TabPanel value="1">
        <EntryForm value={value} />
      </TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
      <TabPanel value="3">Item Three</TabPanel>
    </TabContext>
  );
}

export const Builder = () => {
  const [tabs, setTabs] = useState(initialTabs);
  useEffect(() => {
    getDocs(pagesCollection).then((pages) => {
      let array = [];
      pages.forEach((page) => {
        array.push(page.data());
      });
      setTabs(array);
    });
  }, []);

  return (
    <MainContainer component="main">
      <LabTabs tabs={tabs} setTabs={setTabs} />
    </MainContainer>
  );
};
