import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  searchParentContainer: {
    backgroundColor: "#E8F3FC",
    display: "flex",
    height: "326px",
    margin: "0",
    minWidth: "0",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "relative",
    padding: "1.5rem",
  },
  searchImgContainer: {
    boxSizing: "border-box",
    margin: "0",
    minWidth: "0",
    display: "block",
    position: "absolute",
    bottom: "0",
    right: "0",
    zIndex: "1",
    maxHeight: "326px",
  },
  salaryImg: {
    opacity: "1",
    transition: "opacity 400ms",
    height: "100%",
    maxHeight: "326px",
  },
  searchContentParent: {
    width: "1280px",
    boxSizing: "border-box",
    margin: "0",
    maxWidth: "100%",
    minWidth: "0",
    marginLeft: "100px",
    marginRight: "100px",
    zIndex: "2",
    display: "block",
  },
  searchContentContainer: {
    boxSizing: "border-box",
    margin: "0",
    minWidth: "0",
    zIndex: "1",
    display: "block",
  },
  searchHeaderWrapper: {
    marginBottom: "1.5rem",
    boxSizing: "border-box",
    margin: "0",
    minWidth: "0",
    display: "block",
  },
  blueBorder: {
    width: "794px",
    boxSizing: "border-box",
    margin: "0",
    minWidth: "0",
    borderRadius: "0.5rem",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
    backgroundColor: "#7eacfb",
    height: "10px",
  },
  searchInputWrapper: {
    width: "794px",
    padding: "1.5rem",
    paddingBottom: "1rem",
    display: "flex",
    boxSizing: "border-box",
    margin: "0",
    minWidth: "0",
    flexDirection: "column",
    borderRadius: "0.5rem",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
    backgroundColor: "white",
    zIndex: "1",
  },
  searchForm: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    boxSizing: "border-box",
    margin: "0",
    minWidth: "0",
  },
  inputWrapper: {
    maxWidth: "284px",
    display: "flex",
    flexDirection: "column",
    flex: "1 0 auto",
    paddingBottom: "1.5rem",
    boxSizing: "border-box",
    margin: "0",
    minWidth: "0",
    position: "relative",
    marginLeft: "1rem",
  },
  searchButton: {
    display: "inline-flex",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    margin: "0",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    fontSize: "1rem",
    fontWeight: "700",
    borderStyle: "solid",
    borderRadius: "0.5rem",
    borderWidth: "1px",
    width: "auto",
    paddingTop: "0.6rem",
    paddingBottom: "0.6rem",
    color: "#ffffff",
    borderColor: "#085ff7",
    backgroundColor: "#085ff7",
    overflow: "visible",
    "&:hover": {
      backgroundColor: "#103a7d",
    },
  },
}));
