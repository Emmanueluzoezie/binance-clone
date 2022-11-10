import ProfileHeader from './ProfilePages/ProfileHeader'
import ProfileSection from './ProfilePages/ProfileSection'
import Footer from '../components/Footer'
function Profile() {
  return (
    <div className='flex flex-col gap-1'>
     <ProfileHeader/>
     <ProfileSection/>
     <Footer/>
    </div>
  )
}

export default Profile