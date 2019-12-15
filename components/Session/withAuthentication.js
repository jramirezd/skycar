import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';

import { registerAuthObserver } from '../../services/auth';


const WithAuthentication = ( Component ) => {
      const { onSetAuthUser } = authUser;
      const [isLoading, setIsLoading] = useState(true);
      const user = useSelector(state => state.authUser);

      useEffect(() => {
        const cancelObserver = registerAuthObserver(async (user) => {
          console.log("TCL: cancelObserver -> user", user)
          if (user) {
            const profile = await getItem('profiles', user.uid);
            console.log("TCL: cancelObserver -> profile", profile)
            if (profile) {
              onSetAuthUser(profile);
            } else {
              console.log("todavía se está registrando");
            }
          } else {
            onSetAuthUser(null);
          }
          setIsLoading(false);
        });
    
        return () => {
          cancelObserver();
        };
      }, []);
    
      return (
        <Component { ...this.props } />
      );
 
}


const mapDispatchToProps = (dispatch) => {
  return {
    onSetAuthUser: (authUser) => dispatch({ type: 'AUTH_USER_SET', authUser })
  }
}

export default connect(null, mapDispatchToProps)(WithAuthentication);