import ProfileHeader from './ProfilePages/ProfileHeader'
import ProfileSection from './ProfilePages/ProfileSection'
import ProfileFooter from './ProfilePages/ProfileFooter'
function Profile() {
  return (
    <div className='flex flex-col gap-1'>
     <ProfileHeader/>
     <ProfileSection/>
     <ProfileFooter/>
    </div>
  )
}

export default Profile