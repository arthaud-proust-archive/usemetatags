import { useEffect, useState } from "react";

const LOCAL_PROFILES = 'metatags.profiles';

export default function useMetaProfile() {
    const [profiles, setProfiles] = useState([]);


    useEffect(()=>{
        if(Array.isArray(profiles) && profiles.length>0)
            localStorage.setItem(LOCAL_PROFILES, JSON.stringify(profiles));
    }, [profiles]);

    const getProfiles = ()=>{
        console.group('getProfiles');
        console.log(profiles);
        if( Array.isArray(profiles) && profiles.length>0 ) {
            console.groupEnd();
            return profiles;
        }

        var fetchedProfiles;
        try {
            fetchedProfiles = JSON.parse(localStorage.getItem(LOCAL_PROFILES));
            if (
                Array.isArray(fetchedProfiles)
            ) {
                setProfiles(fetchedProfiles);
                console.groupEnd(); 
                return fetchedProfiles;
            }
            console.groupEnd();
            return [];
        } catch(e) {
            console.log(e);
            console.groupEnd();
        }
    }

    const getProfile = id=>{
        return getProfiles().find(item=>item.id==id) || false;
    }

    const saveProfile = (profileData) => {
        var profileIndex = -1;
        for(let i=0; i<profiles.length; i++) {
            if(profiles[i].id == profileData.id) {
                profileIndex = i;
                break;
            }
        }


        const profilesCopy = [...profiles];
        if(profileIndex>=0) {
            profilesCopy[profileIndex] = profileData;
        } else {
            profilesCopy.push(profileData);
        }
        setProfiles(profilesCopy);
    }

    return {
        getProfiles,
        getProfile,
        saveProfile,
    };
}