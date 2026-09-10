import { profile, professionalProfiles } from '../data/portfolio'

export function ProfileSidebar() {
  return (
    <aside className="profile" aria-label="Profile and navigation">
      <header>
        <h1 className="profile-name">{profile.name}</h1>
        <p className="profile-role">{profile.role}</p>
      </header>
      <p className="profile-intro">Making complex products<br />feel simple to use.</p>
      <p className="profile-status">Location & availability to follow</p>
      <nav className="primary-nav" aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="profile-contacts">
        <div className="direct-contacts">
          <a className="primary-link" href={profile.telegram} aria-label="Contact me on Telegram">Telegram</a>
          <a className="text-link contact-email" href={profile.email}>Email</a>
        </div>
        <div className="document-action">
          <a className="text-link" href={profile.cv}>View CV</a>
        </div>
        <nav className="secondary-contacts" aria-label="Professional profiles">
          {professionalProfiles.map(({ label, href }) => (
            <a className="text-link" key={label} href={href}>{label}</a>
          ))}
        </nav>
      </div>
    </aside>
  )
}
