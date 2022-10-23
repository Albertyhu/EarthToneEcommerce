import React, { useEffect, useState, useCallback, useContext } from 'react';
import '../../product.css';
import '../../../../../style/button.css';
import { useLocation, useNavigate } from 'react-router-dom';
import ImagePanel from './../imagePanel.js';
import TextPanel from './../textPanel.js'; 
import CTAPanel from './../CTApanel.js'
import { TeaData } from '../../../../components/teaData.js'; 
import { SecondInnerCont } from '../../../../style/globalStyledComp.js';
import { MyContext, ProductProfileContext } from '../../../../components/contextItem.js';
import styled from 'styled-components';
import ReviewPanel from './../reviewPanel.js'; 
