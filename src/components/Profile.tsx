import * as React from 'react';
import {useState, useEffect} from 'react';
import {getCurrentUser} from "aws-amplify/auth";
import {DataStore} from "@aws-amplify/datastore";
import {UserProfile} from "../models";


