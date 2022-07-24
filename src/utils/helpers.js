import { useLocation, useNavigate, useParams } from "react-router-dom";

export const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return <Component {...props} router={{ location, navigate, params }} />;
    };
  
    return ComponentWithRouterProp;
  };


  export function toDate (timestamp){
  
    var date = new Date(timestamp).toLocaleDateString("en-US")
    var time = new Date(timestamp).toLocaleTimeString("en-US")
    
    return date + ' ' + time
}