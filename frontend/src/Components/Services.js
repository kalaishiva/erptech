import { CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Card from "@mui/material/Card";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    minWidth: 275,
    width: "300px",
    height: "600px",
    padding: "10px",
    boxShadow: "7px 7px powderblue",
    backgroundColor: "#2c698d",
    color: "aliceblue",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#e3f6f5",
  },
  gap: {
    margin: "3px",
    padding: "18px",
    width: 400,
  },
  tcolor: {
    color: "#063970",
    paddingBlock: "30px",
    paddingInline: "70px",
    lineHeight: "3em",
  },
  space: {
    paddingTop: "64px",
  },
});

function Services() {
  const Styles = useStyles();
  return (
    <>
      {/* 
    <Box>
    <Card variant="outlined">{card}</Card>
    </Box> */}

      <Grid container className={Styles.tcolor} id="Services">
        <Grid item>
          <Typography variant="h3" component="div" className={Styles.space}>
            Services
          </Typography>

          <Typography variant="h4" component="div">
            Transforming Your Business Operations
          </Typography>
          <Typography variant="h6">
            Our expert team offers you world-class SAP consulting based on the
            vast global experience acquired from various of Industry customers.
            Our World class experience in different industry verticals like
            Automotive,Chemicals,Consumer Products,Energy, Utilities &
            Mining,Healthcare / Pharmaceutical, Hi-Tech,Logistics &
            Transportation,Manufacturing,FMCG, Wholesale & Distribution,Food &
            Beverages,Retail combined with its experienced team of consultants
            transforms business challenges into opportunities for the customer.
            Our customers have successfully improved their business approach,
            fully utilized the power of SAP to provide a digital support and
            transformation to their business, and have adopted innovative
            strategies to meet the ever-changing needs of their industries. We
            can help you in the rapid deployment of SAP Applications whether
            On-premise, Cloud or a Hybrid model best suitable for your business.
            We are offering ERP, S/4 HANA, Analytics, Mobility, Cloud and HANA
            services. We delivers Digital Transformation, End to End
            Implementation, Rollout, Migration, Upgrade projects, Application
            development and Product support by means on/off-site or mixed model.
          </Typography>
        </Grid>
      </Grid>

      <Box className={Styles.row} sx={{ flexWrap: "wrap" }}>
        <Grid container spacing={3} className={Styles.gap}>
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined" className={Styles.container}>
              <CardContent>
                <Typography variant="h4" component="div">
                  Application Development and System Integration
                </Typography>
                <Typography variant="body1" paddingTop={"15px"}>
                  ERP Tech Solution offers design and implementation of Customised
                  Applications that fit your needs perfectly, while also being
                  secure and robust. Our user-centric design approach, lean and
                  agile development accelerates the business value of
                  applications built by us. We exploit the benefits of the
                  latest tools and technology and Industry Best-Practices for
                  improved product quality, more useful functionality, better
                  user experience, lower cost and higher ROI.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={Styles.gap}>
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined" className={Styles.container}>
              <CardContent>
                <Typography variant="h4" component="div">
                  SAP Application Management
                </Typography>
                <Typography variant="body1" paddingTop={"15px"}>
                  Application Management Services (AMS) is a vital element in
                  enabling and enhancing the lifecycle of any application. ERP Tech Solution 
                  primarily focuses on maintaining and continually
                  transforming your critical applications to meet your
                  ever-changing business requirements. Our application support
                  and maintenance services ensure a high-performance platform
                  for operating and managing your organization’s critical
                  applications. ERP Tech Solution  offers customized cost effective
                  SAP support services in line with customer needs onsite/Remote
                  or mixed mode support.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={Styles.gap}>
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined" className={Styles.container}>
              <CardContent>
                <Typography variant="h4" component="div">
                  Technology
                </Typography>
                <Typography variant="body1" paddingTop={"15px"}>
                  We offers a wide range of technology consulting services to
                  guide your organization on running day-to-day operations for
                  running digital centric business. we have been supporting
                  small, medium and large enterprises to make use of new
                  technology-driven opportunities for Digital Transformation.
                  Our technology consulting services are steered by functional
                  and industry experts for each industry domain that we work in.
                  These experts assist our clients in achieving growth by making
                  the right decisions at the right time.
                  <br />
                  We empower our clients with latest technology to prosper and
                  evolve beyond their limits within a short span of time,
                  helping in driving business growth and sustainability.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={Styles.gap}>
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined" className={Styles.container}>
              <CardContent>
                <Typography variant="h4" component="div">
                  Education & Trainings
                </Typography>
                <Typography variant="body1" paddingTop={"15px"}>
                  ERP Tech Solution has been committed to providing quality
                  education and knowledge to the SAP ecosystem. We recognize
                  that different customer groups have different training
                  requirements, so we provide variety of training options.
                  <br />
                  For SAP end-user and project teams, we offer corporate
                  training on SAP programs.
                  <br />
                  These programs help in the fulfillment of skill gaps
                  identified and are primarily focused on the specific needs of
                  the project teams or SAP users.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={Styles.gap}>
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined" className={Styles.container}>
              <CardContent>
                <Typography variant="h4" component="div">
                  Cloud Service
                </Typography>
                <Typography variant="body1" paddingTop={"15px"}>
                  ERP Tech Solution helps you transform your IT environment by
                  implementing smart cloud solution that drive next-generation
                  business practices while seamlessly integrating your entire
                  set of applications and infrastructure portfolio.
                  <br />
                  Cloud computing is scalable and reliable. There is no limit to the number of users or resources. Furthermore, the cloud increases processing and resources as needed. If you do not need resources, you can always scale down.
                  <br />
                  We can partner with you to migrate your existing business
                  applications and collaboration platforms to the cloud solution
                  that best meets your needs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={Styles.gap}>
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined" className={Styles.container}>
              <CardContent>
                <Typography variant="h4" component="div">
                  Legacy Modernization
                </Typography>
                <Typography variant="body1" paddingTop={"15px"}>
                  Our Legacy Modernization and Transformation services can help
                  to convert or migrate your legacy SAP applications to newer
                  technologies using a highly automated, tools-based approach
                  and a proven structured methodology.
                  <br />
                  Our Modernization solution is tailored for specific customer
                  needs and will provide high ROI.
                  <br /> 
                  Legacy systems continue to be an important part of corporate IT. Your business can be brought to a new level.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Services;