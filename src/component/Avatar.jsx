const Avatar = ({ img, icon, size, margin }) => {
  return (
    <div>
      <img
        src={img}
        alt="avatar_netflix"
        style={{ width: size }}
        className={margin}
      />
      {icon}
    </div>
  )
}

export default Avatar
