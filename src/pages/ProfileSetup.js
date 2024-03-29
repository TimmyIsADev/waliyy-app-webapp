import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import UserIcon from '@mui/icons-material/Person';
import WorldIcon from '@mui/icons-material/Public';
import SchoolIcon from '@mui/icons-material/School';
import MosqueIcon from '@mui/icons-material/Mosque';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';
import CongratulationsRegister from '../screens/CongratulationsRegister';
import { AboutDeenForm, EducationAndProfessionForm, NationalityForm, PersonalDetailsForm, SelfSummaryForm } from '../components/setupForms';


const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 48,
  height: 48,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <UserIcon />,
    2: <WorldIcon />,
    3: <SchoolIcon />,
    4: <MosqueIcon />,
    5: <RecordVoiceOverIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The index of the step.
   */
  icon: PropTypes.number,
};

const steps = [
  'Personal Details',
  'Nationality and Heritage',
  'Education and Profession',
  'About my Deen',
  'Self Summary',
];

export default function ProfileSetup() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };


  const forms = [
    (props) => <PersonalDetailsForm {...props} />,
    (props) => <NationalityForm {...props} />,
    (props) => <EducationAndProfessionForm {...props} />,
    (props) => <AboutDeenForm {...props} />,
    (props) => <SelfSummaryForm {...props} />,
  ];

  return (
    <React.Fragment>
      {allStepsCompleted() ? (
        <CongratulationsRegister />
      ) : (
        <Box
          spacing={4}
          className="mx-auto px-8 py-12 box-shadow-style rounded-lg w-full md:w-4/5"
        >
          <div className="flex flex-col px-8 mb-8">
            <p className="font-semibold text-2xl text-[#2D133A]">
              Setup your Account
            </p>
            <p className="text-[#665e6b] text-lg">Tell us about your ward</p>
          </div>
          <Stepper
            alternativeLabel
            nonLinear
            activeStep={activeStep}
            connector={<ColorlibConnector />}
          >
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          <div className="px-0 sm:px-8 py-8 w-full md:w-11/12 mx-auto flex flex-col gap-10">
            {forms[activeStep]({
              activeStep,
              handleBack,
              steps,
              handleComplete,
              handleNext,
              totalSteps,
              completedSteps,
              completed,
            })}
          </div>
        </Box>
      )}
    </React.Fragment>
  );
}
