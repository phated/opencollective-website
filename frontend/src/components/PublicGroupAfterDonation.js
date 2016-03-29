import React from 'react';
import PublicGroupThanks from './PublicGroupThanks';
import ProfilePhotoUpload from './ProfilePhotoUpload';

export default class PublicGroupAfterDonation extends React.Component {

  render() {
    return (
      <div>
        <PublicGroupThanks />
      </div>
    );
    // <ProfilePhotoUpload
    //   {...this.props}
    //   value={this.state.form.profile.attributes.avatar || this.state.user.avatar}
    //   onFinished={avatar => console.log('Finished!', avatar)}/>
    // value={this.state.form.profile.attributes.avatar}
  }
};
