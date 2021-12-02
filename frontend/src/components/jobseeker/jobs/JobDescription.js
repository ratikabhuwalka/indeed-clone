import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useReducer, useState } from "react";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
//import { makeApplyRequest } from '../../Redux/JobApply/actions';
//import { ApplyModal } from './JobApplyModal/ApplyModal';
import jobDetails from "./jobdetails";
import { Link } from "react-router-dom";
import axios from "axios";
import endPointObj from "../../../endPointUrl";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "sticky",
    top: "20px",
    // marginLeft: "50px",
    alignSelf: "flex-start",
    border: "1px solid black",
    padding: "20px",
    flex: "1",
    borderRadius: "10px ",
  },
  link: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    height: "53px",
    padding: "0 25px",
    fontSize: "20px",
    color: "white",

    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: "white",
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  job_title: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  resume_sub_title: {
    fontSize: ".75rem",
    fontWeight: 400,
    color: "#767676",
  },
  sub_details: {
    fontSize: "15px",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
function JobDescription({ jobData }) {
  const classes = useStyles();
  const {
    companyName,
    city,
    jobTitle,
    salary,
    jobId,
    snippet,
    jobDescription,
  } = jobData;
  console.log("salary", salary);
  //const {saved_jobs,applied_job,id} = useSelector(state=>state.login.loggedUser)
  const [open, setOpen] = useState(false);
  const [_jobId, setJobId] = useState("");
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const mongoId = useSelector((state) => state.login.user.mongoId);
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
    setJobId("");
  };

  const handleOpen = (id) => {
    setJobId(id);
    setOpen(true);
  };

  //fetchjobdetails
  console.log("Job details - jobdescription", jobDetails);

  // const handleApply=()=>{
  //     applied_job[jobId] = {
  //         jobkey,
  //         location,
  //         companyName,
  //         jobTitle,
  //         dateSaved:new Date()
  //     }
  //     //dispatch(makeApplyRequest({user_id:id,saved_jobs,applied_job}))
  //     setOpen(false)
  //     forceUpdate()
  // }
  const hiddenFileInput = React.useRef(null);

  const applyJob = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  const handleChange = (e) => {
    e.preventDefault();
    const fileUploaded = e.target.files[0];
    const formData = new FormData();
    formData.append("file", fileUploaded);
    axios
      .post(
        `${endPointObj.url}/job-seeker/upload-resume?jobSeekerId=${mongoId}&resumeName=${fileUploaded.name}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res);
        // if (res.status === 200) dispatch(getProfile(mongoId));
      })
      .catch((err) => {
        console.log("Error while uploading Resume: ", err);
      });
  };
  return (
    <Box className={classes.container}>
      <div>
        <Typography
          className={classes.job_title}
          style={{ marginBottom: "10px" }}
        >
          {jobTitle}
        </Typography>
        <Box style={{ marginBottom: "5px" }}>
          {/* Setting up current company id in locastorage to make it access to company homepage. */}
          {localStorage.setItem("currentcompanyid", jobDetails[0].companyId)}
          <Link
            to="/companyHome"
            style={{ textDecoration: "none", color: "#000000" }}
          >
            {companyName}
          </Link>
        </Box>
        <Box style={{ marginBottom: "5px" }}>{jobDetails[0].location}</Box>
        <Box style={{ marginBottom: "10px" }}>
          <u>{jobDetails[0].jobType}</u>
        </Box>
        <div>
          <Button
            color={"primary"}
            variant="contained"
            type="submit"
            // className={classes.applyJob}
            onClick={applyJob}
          >
            Apply
          </Button>
          <input
            type="file"
            id="resume"
            name="resume"
            style={{ display: "none" }}
            ref={hiddenFileInput}
            onChange={handleChange}
          />
        </div>
      </div>
      <hr />
      <Box style={{ marginBottom: "10px" }}>
        <Typography
          className={classes.job_title}
          style={{ marginBottom: "3px" }}
        >
          Resume Insights
        </Typography>
        <div className={classes.resume_sub_title}>
          Here’s how your resume aligns with the job description
        </div>
        <br />
        <b>Experience & Skills</b> <br />
        <div className={classes.sub_details}>{jobDetails[0].skillsNeeded}</div>
      </Box>
      <hr />
      <Box style={{ marginBottom: "10px" }}>
        <Typography
          className={classes.job_title}
          style={{ marginBottom: "14px" }}
        >
          Job details
        </Typography>
        <b>Job Type</b>
        <br />
        <div className={classes.sub_details}>{jobDetails[0].jobType}</div>
      </Box>
      <hr />
      <Box style={{ marginBottom: "10px" }}>
        <Typography
          className={classes.job_title}
          style={{ marginBottom: "10px" }}
        >
          Indeed's salary guide
        </Typography>
        <div className={classes.sub_details}>
          <li>Not provided by employer</li>
          <li>
            $ {salary} per year is Indeed's estimated salary for {jobTitle} at{" "}
            {companyName}.
          </li>
        </div>
      </Box>
      <hr />
      <Box style={{ marginBottom: "10px" }}>
        <Typography
          className={classes.job_title}
          style={{ marginBottom: "10px" }}
        >
          Full Job Description
        </Typography>
        <div className={classes.sub_details}>
          What You’ll Do: <br />
          <li>{jobDetails[0].yourRole}</li> <br />
          Why You’ll love working for a: <br />
          <li>{jobDetails[0].whyYouWillLoveWorking}</li> <br />
          Work Remotely <br />
          <li>Temporarily due to COVID-19</li> <br />
          Job type: {jobDetails[0].jobType}
          <br />
          Pay: {jobDetails[0].salaryDetails}
          <br />
        </div>
      </Box>
      {ignored ? null : null}
      {/* <Button className={classes.link} onClick={()=>handleOpen(jobkey)} disabled={applied_job[jobkey]?true:false}  style={{marginBottom:'30px'}}>
                {applied_job[jobkey]?'Applied':'Apply Now'}
            </Button> */}
      {/* <Section jobDescription={jobDescription} summary={snippet} />
            <ApplyModal 
                    open={open}
                    handleClose = {()=>handleClose()}
                    jobId = {jobId}
                    handleApply ={()=>handleApply()}
            /> */}
    </Box>
  );
}

export default JobDescription;