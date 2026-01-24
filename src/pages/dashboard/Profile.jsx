import ProfileHeader from '../../components/profile/ProfileHeader';
import ProfileBentoLayout from '../../components/profile/ProfileBentoLayout';

const Profile = () => {
    return (
        <div className="flex flex-col gap-8 max-w-[1400px] mx-auto">
            <ProfileHeader />
            <ProfileBentoLayout />
        </div>
    );
};

export default Profile;
