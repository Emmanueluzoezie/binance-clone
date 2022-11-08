import ProfileHeader from './ProfilePages/ProfileHeader'
import ProfileSection from './ProfilePages/ProfileSection'

function Profile() {
  return (
    <div className='flex flex-col gap-1'>
     <ProfileHeader/>
     <ProfileSection/>
    </div>
  )
}

export default Profile