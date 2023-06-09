function Post ({ userName, userPhoto, photo, description }) {
  return (
    <section className='post'>
      <div className='post-header'>
        <img src={userPhoto} />
        <h3>{userName}</h3>
      </div>
      <div className='post-content'>
        <img src={photo} />
      </div>
      <div className='post-bottom'>
        <p>{description}</p>
        <input placeholder='Write a comment' type='text' />
      </div>
    </section>
  )
}

export default Post