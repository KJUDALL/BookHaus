  //created & modified file here: AJ 

export const saveUserProfile = (profile) => {
    localStorage.setItem('userProfile', JSON.stringify(profile));
  };
  
  export const getUserProfile = () => {
    const profile = localStorage.getItem('userProfile');
    return profile ? JSON.parse(profile) : null;
  };
  
  export const clearUserProfile = () => {
    localStorage.removeItem('userProfile');
  };