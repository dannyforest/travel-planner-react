import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { fetchUserAttributes } from 'aws-amplify/auth';
import { getCurrentUser } from 'aws-amplify/auth';
import { fetchAuthSession } from 'aws-amplify/auth';
import {AuthUser} from "aws-amplify/auth";
import {Amplify} from "aws-amplify";
import awsExports from '../aws-exports';
import {UserProfile} from "../models";
import {DataStore} from "@aws-amplify/datastore";
import UserProfileComponent from "../components/UserProfileComponent";
import {Box, Modal, Typography} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
Amplify.configure(awsExports)






const TextStyleH1 = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;
    padding-bottom: 2rem;
    text-align: center;
    text-shadow: 3px 4px 5px black;
`;




export const UserProfileScreen: React.FC = () => {


    return (
        <div>
            <TextStyleH1>User Profile</TextStyleH1>
            <UserProfileComponent />
        </div>
    )
};