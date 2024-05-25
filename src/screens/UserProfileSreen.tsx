import React, {useEffect, useState} from 'react';
import {Profile} from "../components/Profile";
import styled from "styled-components";
import {Box, Modal, Typography, Tooltip} from "@mui/material";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import {UserProfile} from "../models";
import {DataStore} from "@aws-amplify/datastore";
import {getCurrentUser} from "aws-amplify/auth";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 465,
    bgcolor: 'background.paper',
    border: '3px #000 double',
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
};

const closeIconStyle = {
    position: "relative",
    top: "-28px",
    right: "-400px",
    cursor: "pointer",
    color: "red",
    border: "2px black solid",
    borderRadius: "5px"
}

const modalTitleStyle = {
    position: "relative",
    textAlign: "center",
    top: "-55px",
    color: "black",
    fontWeight: "bold",
}


const TextStyleH1 = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;
    padding-bottom: 2rem;
    text-align: center;
    text-shadow: 3px 4px 5px black;
`;

const InputStyle = styled.input`
    width: 300px;
    border: none;
    border-bottom: 0.5px black solid;
    margin: 0 0 1rem 2rem;
`;

const LabelStyle = styled.label`
    font-weight: bold;
    width: 35px;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const DivStyledInput = styled.div`
    display: flex;
    flex-direction: row;
`;


const TextAreaStyle = styled.textarea`
    width: 300px;
    height: auto;
    margin-left: 2rem;
    border: 0.2px black solid;
    resize: vertical; /* Allows the textarea to be resizable vertically */
`;

const ButtonContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    padding-top: 10px;
    margin: 0 auto;
`;

export const UserProfileScreen = () => {
    const [open, setOpen] = useState(false);
    const [userId, setUserId] = useState<string | null>(null);
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        avatar: '',
        bio: ''
    });

    useEffect(() => {
        getCurrentUser().then(({userId}) => {
            setUserId(userId);
        })
    }, []);

    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userId) return;

        const original = await DataStore.query(UserProfile, userId);

        if (original) {
            const updatedUserProfile = await DataStore.save(
                UserProfile.copyOf(original, updated => {
                    updated.name = formData.name;
                    updated.email = formData.email;
                    updated.avatar = formData.avatar;
                    updated.bio = formData.bio;
                })
            );
            setUserProfile(updatedUserProfile);
        }
            handleClose(); // Close the modal after updating the profile
    };


    return (
        <div>
            <TextStyleH1>User Profile</TextStyleH1>
            <Profile/>
            <button
                title="Edit profile"
                onClick={handleOpen}
            >
                Edit profile
            </button>
            <button
                title="Delete profile"
            >Delete profile</button>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Tooltip title="Close">
                        <CloseTwoToneIcon
                            onClick={handleClose}
                            sx={closeIconStyle}
                        />
                    </Tooltip>
                    <Typography
                        id="modal-modal-title"
                        variant="h5"
                        component="h2"
                        sx={modalTitleStyle}
                    >
                        User profile editing
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        <StyledForm>
                            <DivStyledInput>
                                <LabelStyle>Name:</LabelStyle>
                                <InputStyle
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                />
                            </DivStyledInput>
                            <DivStyledInput>
                                <LabelStyle>Email:</LabelStyle>
                                <InputStyle
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@example.com"
                                />
                            </DivStyledInput>
                            <DivStyledInput>
                                <LabelStyle>Avatar:</LabelStyle>
                                <InputStyle
                                    type="file"
                                    name="avatar"
                                    value={formData.avatar}
                                    onChange={handleChange}
                                />
                            </DivStyledInput>
                            <DivStyledInput>
                                <LabelStyle>Bio:</LabelStyle>
                                <TextAreaStyle
                                    rows={5}
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    placeholder="Your bio"
                                />
                            </DivStyledInput>
                            <ButtonContainer>
                                <button onClick={handleSubmit} title="save">Save</button>
                                <input type="reset" value="Reset" title="Reset"/>
                                <button title="Cancel">Cancel</button>
                            </ButtonContainer>
                        </StyledForm>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
};

